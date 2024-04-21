import { Menu } from "./types";


// Схема меню
export const navlinks: Menu[] = [
  {
    header: "Главная"
  },
  {
    header: "Каталог упражнений",
    sublinks: [
      {
        title: "Дельтовидные мышцы",
        href: "/exercise/shoulders",
      },
      {
        title: "Пресс",
        href: "/exercise/abs",
      },
      {
        title: "Мышцы груди",
        href: "/exercise/chest",
      },
      {
        title: "Мышцы ног",
        href: "/exercise/legs",
      },
      {
        title: "Мышцы спины",
        href: "/exercise/back",
      },
      {
        title: "Мышцы рук",
        href: "/exercise/arms",
      },
    ],
  },
  {
    header: "Программы тренировок",
    sublinks: [
      {
        title: "Для женщин",
        href: "/training/woman",
      },
      {
        title: "Для начинающих",
        href: "/training/beginners",
      },
      {
        title: "По системе сплит",
        href: "/training/split",
      },
      {
        title: "По системе фулбоди",
        href: "/training/fullbody",
      },
    ],

  }
]

