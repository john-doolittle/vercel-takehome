import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vercel Senior Customer Success Engineer, West Take Home Exercise
      </h1>
      <p className="mb-4">
        {`Hi! 👋 I'm John Doolittle. Thanks for allowing me to interview
         for the Sr. Customer Success Engineer, West position.
         Click the link below to see my answers to the questions.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
