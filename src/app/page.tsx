import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex items-start h-[calc(100vh-4rem)]">
      <div className="posts flex-1 bg-blue-50 flex items-center justify-center h-full border-r border-black border-opacity-30">
        <Link
          href={'/posts'}
          className="flex items-center justify-center rounded-full bg-yellow-400 text-black w-1/2 py-4 hover:scale-105 transition-all duration-500">See Posts</Link>
      </div>
      <div className="add-post flex-1 h-full flex items-center justify-center bg-blue-50">
        <Link
          href={'/add-post'}
          className="flex items-center justify-center rounded-full bg-red-400 text-white w-1/2 py-4 hover:scale-105 transition-all duration-500"
        >
          Add Post
        </Link>
      </div>
    </main>
  )
}
