import { BlogPosts } from 'app/components/posts'
import TimeDisplay from './components/TimeDisplay'

export default function Page() {
  return (
    <section>
      <h1
        className="text-7xl mb-20 tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 leading-none"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: '450',
        }}
      >
        Hi, Nana
      </h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        Privacy Engineer & AI Ethics Advocate
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust.
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <TimeDisplay />
    </section>
  )
}
