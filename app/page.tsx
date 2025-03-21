import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="mb-16">
        <h1 className="text-2xl mb-2 text-neutral-900 dark:text-neutral-100 tracking-tight" style={{ fontWeight: '500' }}>
          Nana Asante
        </h1>
        <p className="text-lg text-neutral-800 dark:text-neutral-200">
          Privacy Engineer & AI Ethics Advocate
        </p>
      </div>
      <div className="space-y-5 mb-16 text-[15px]">
        <p className="text-neutral-700 dark:text-neutral-300">
          I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.
        </p>
      </div>
      <div>
        <BlogPosts />
      </div>
    </section>
  )
}
