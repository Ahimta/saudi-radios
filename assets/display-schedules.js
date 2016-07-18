'use strict';

(function (window)
{
  var saudiRadios = window.saudiRadios = window.saudiRadios || {}
  var schedules = saudiRadios.schedules

  function indexToDay (dayIndex)
  {
    var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    return days[dayIndex]
  }

  function formatHour (hour)
  {
    if (hour == 0) { return '12' }
    if (hour > 12) { return '' + (hour - 12) }
    if (hour < 10) { return '0' + hour }
    return '' + hour
  }

  function formatMinute (minute)
  {
    if (minute < 10) { return '0' + minute }
    else             { return ''  + minute }
  }

  function formatAMorPM (hour, formattedTime)
  {
    if (hour > 12 || hour === 0) { return 'م' }
    else                         { return 'ص' }
  }

  function formatTime (hour, minute)
  {
    var formattedMinute = formatMinute(minute)
    var formattedHour = formatHour(hour)
    var amOrPm = formatAMorPM(hour)

    return formattedHour + ':' + formattedMinute + ' ' + amOrPm
  }

  function formatPeriod (periodInMinutes)
  {
    return periodInMinutes + ' ' + 'دقيقة'
  }

  function processSchedules (schedules)
  {
    var currentDate = new Date()
    var currentDay = indexToDay(currentDate.getDay())
    var currentMinute = currentDate.getHours() * 60 + currentDate.getMinutes()
    var x = {}

    Object.keys(schedules).forEach(function (radioId)
    {
      var schedule = schedules[radioId]
      var s = []

      schedule.forEach(function (program)
      {
        if (program.runs[currentDay])
        {
          var time = program.runs[currentDay]
          var startMinutes = time.hour * 60 + time.minute
          var endMinutes = startMinutes + program.period
          var isAiring = currentMinute >= startMinutes && currentMinute <= endMinutes

          s.push({name: program.name, period: program.period, hour: time.hour, minute: time.minute, isAiring: isAiring})
        }
      })

      x[radioId] = s.sort(function (x, y)
      {
        return (x.hour === y.hour) ? (x.minute - y.minute) : (x.hour - y.hour)
      })
    })

    return x
  }

  function generateScheduleDOM (processedSchedule)
  {
    if (processedSchedule.length === 0) { return '' }
    else
    {
      var rows = processedSchedule.map(function (program)
      {
        var openingTag = program.isAiring ? "<tr class='success'>" : "<tr>"

        return (openingTag +
                  "<td class='text-center'>" + formatTime(program.hour, program.minute) + "</td>" +
                  "<td class='text-center'>" + program.name + "</td>" +
                  "<td class='text-center'>" + formatPeriod(program.period) + "</td>" +
                "</tr>")
      })

      return ("<table class='table table-condensed table-hover' dir='rtl'>" +
                "<thead>" +
                  "<tr>" +
                    "<th class='text-center'>الوقت</th>" +
                    "<th class='text-center'>اسم البرنامج</th>" +
                    "<th class='text-center'>المدة</th>" +
                  "</tr>" +
                "</thead>" +
                "<tbody>" +
                  rows +
                "</tbody" +
              "</table>")
    }
  }

  function displaySchedules (processedSchedules)
  {
    Object.keys(processedSchedules).forEach(function (scheduleId)
    {
      var schedule = processedSchedules[scheduleId]
      var tableWrapper = document.querySelector('[data-schedule-table-id=' + scheduleId + ']')

      if (tableWrapper) { tableWrapper.innerHTML = generateScheduleDOM(schedule) }
    })
  }

  saudiRadios.displayAndRefreshSchedules = function ()
  {
    displaySchedules(processSchedules(saudiRadios.schedules))
    setInterval(function () { displaySchedules(processSchedules(saudiRadios.schedules)) }, 10000)
  }
})(window)