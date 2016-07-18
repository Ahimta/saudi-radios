'use strict';

(function (window)
{
  window.saudiRadios = window.saudiRadios || {}
  var schedules = window.saudiRadios.schedules = {}

  schedules.riyadhRadio = [
    {
      name: 'أحلى صباح', period: 120,
      runs: {
        sun: {hour: 7, minute: 0},
        mon: {hour: 7, minute: 0},
        tue: {hour: 7, minute: 0},
        wed: {hour: 7, minute: 0},
        thu: {hour: 7, minute: 0}
      }
    },
    {
      name: 'أسواق و مؤشرات', period: 30,
      runs: {
        sun: {hour: 15, minute: 30},
        mon: {hour: 15, minute: 30},
        tue: {hour: 15, minute: 30},
        wed: {hour: 15, minute: 30},
        thu: {hour: 15, minute: 30}
      }
    },
    {
      name: 'صوت المواطن', period: 60,
      runs: {
        sun: {hour: 16, minute: 0},
        mon: {hour: 16, minute: 0},
        tue: {hour: 16, minute: 0},
        wed: {hour: 16, minute: 0},
        thu: {hour: 16, minute: 0}
      }
    },
    {
      name: 'وجه المساء', period: 12,
      runs: {
        sun: {hour: 18, minute: 0},
        mon: {hour: 18, minute: 0},
        tue: {hour: 18, minute: 0},
        wed: {hour: 18, minute: 0},
        thu: {hour: 18, minute: 0}
      }
    }
  ]

  schedules.quranRadio = [
    {
      name: 'اللهم بك أصبحنا', period: 90,
      runs: {
        sun: {hour: 6, minute: 15},
        mon: {hour: 6, minute: 15},
        tue: {hour: 6, minute: 15},
        wed: {hour: 6, minute: 15},
        thu: {hour: 6, minute: 15}
      }
    },
    {
      name: 'قضايا و حوارات', period: 55,
      runs: {
        tue: {hour: 16, minute: 10}
      }
    },
    {
      name: 'سماحة الإسلام', period: 13,
      runs: {
        wed: {hour: 13, minute: 45},
        fri: {hour: 20, minute: 40}
      }
    },
    {
      name: 'سابقوا', period: 30,
      runs: {
        mon: {hour: 13, minute: 15},
        tue: {hour: 22, minute: 3}
      }
    },
    {
      name: 'حماية الفكر', period: 11,
      runs: {
        mon: {hour: 23, minute: 0},
        fri: {hour: 12, minute: 0}
      }
    },
    {
      name: 'أخلاقنا', period: 12,
      runs: {
        mon: {hour: 9, minute: 30},
        fri: {hour: 22, minute: 3}
      }
    },
    {
      name: 'قراءة من تفسير أضواء البيان', period: 10,
      runs: {
        sun: {hour: 2, minute: 0},
        mon: {hour: 2, minute: 0},
        tue: {hour: 2, minute: 0},
        wed: {hour: 2, minute: 0},
        thu: {hour: 2, minute: 0},
        fri: {hour: 2, minute: 0},
        sat: {hour: 2, minute: 0}
      }
    },
    {
      name: 'الفتوى و المجتمع', period: 10,
      runs: {
        thu: {hour: 13, minute: 45},
        fri: {hour: 19, minute: 20}
      }
    },
    {
      name: 'رياض الصالحين', period: 17,
      runs: {
        wed: {hour: 13, minute: 3},
        thu: {hour: 16, minute: 10}
      }
    },
    {
      name: 'المسلمون في العالم مشاهد و رحلات', period: 30,
      runs: {
        thu: {hour: 10, minute: 40}
      }
    },
    {
      name: 'شرح كتاب التوحيد من المنتقى', period: 18,
      runs: {
        tue: {hour: 11, minute: 10},
        sat: {hour: 19, minute: 25}
      }
    },
    {
      name: 'مع القرآن', period: 60,
      runs: {
        sun: {hour: 14, minute: 0},
        mon: {hour: 14, minute: 0},
        tue: {hour: 14, minute: 0},
        wed: {hour: 14, minute: 0},
        thu: {hour: 14, minute: 0}
      }
    },
    {
      name: 'فقه اللغة العربية', period: 8,
      runs: {
        tue: {hour: 11, minute: 15},
        wed: {hour: 19, minute: 25}
      }
    },
    {
      name: 'في رحاب آية', period: 11,
      runs: {
        sun: {hour: 20, minute: 53},
        mon: {hour: 20, minute: 53},
        tue: {hour: 20, minute: 53},
        wed: {hour: 20, minute: 53},
        thu: {hour: 20, minute: 53},
        fri: {hour: 20, minute: 53},
        sat: {hour: 20, minute: 53}
      }
    },
    {
      name: 'كيف تقرأ القرآن الكريم', period: 9,
      runs: {
        sun: {hour: 11, minute: 20},
        mon: {hour: 11, minute: 20},
        tue: {hour: 11, minute: 20},
        wed: {hour: 11, minute: 20},
        thu: {hour: 11, minute: 20},
        fri: {hour: 11, minute: 20},
        sat: {hour: 11, minute: 20}
      }
    }
  ]
})(window)