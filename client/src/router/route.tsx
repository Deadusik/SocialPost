import { ReactNode } from "react"
import { FEED_POSTS, REGISTRATION, USER } from "./paths"
// pages
import User from "../pages/User"
import Registration from "../pages/Registration"
import FeedPosts from "../pages/FeedPosts"

interface IRoute {
    path: string
    element: ReactNode
}

export const routes: IRoute[] = [
    {
        path: USER,
        element: <User />
    },
    {
        path: REGISTRATION,
        element: <Registration />
    },
    {
        path: FEED_POSTS,
        element: <FeedPosts />
    }
]