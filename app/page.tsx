import { BlogPosts } from 'app/components/posts'
import TimeDisplay from './components/TimeDisplay'

export default function Page() {
  return (
    <section>
      <h1 className="text-7xl font-bold mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>
        Hi, Nana
      </h1>
      <p className="mb-4">
        Privacy Engineer & AI Ethics Advocate
      </p>
      <p className="mb-4">
        I specialize in privacy engineering, data protection, and compliance, bridging the gap between security and user trust.
      </p>
      <p className="mb-4">
        I'm passionate about the intersection of AI and user experience, with a particular focus on Explainable and Responsible AI.
      </p>
      <p className="mb-4">
        My work aims to ensure that AI systems are not only powerful but also transparent, ethical, and user-centric.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <TimeDisplay />
    </section>
  )
}
