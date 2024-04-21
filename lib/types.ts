export type TCreateUserResponse = {
  user: {
    username: string,
    email: string
  },
  message: string
}

export type NavLink = {
  title: string;
  href: string;
  description?: string;
}

export type Menu = {
  header: string;
  href?: string;
  sublinks?: NavLink[];
}