
const FaqSection = () => {
  return (
    <section className="py-10 md:px-0 px-10 bg-white md:bg-gradient-to-b from-blue-100/50 to-white sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center leading-tight text-black sm:text-4xl lg:text-5xl">Have More <span className="text-blue-500">Questions?</span></h2>
        <p className="text-center text-black md:text-xl text-sm mt-5">Here are some of the frequently asked questions from our customers</p>
        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Why use ResuFlex's AI Resume Builder?</p>
                    <p className="mt-3 text-base text-gray-600">ResuFlex's AI Resume Builder is a top-tier tool designed to help you craft professional, ATS-friendly resumes quickly. Unlike traditional builders, it offers features like AI-generated bullet points, resume summaries, and personalized optimization tips to make your resume stand out. By leveraging AI, it enhances your resume’s effectiveness, increasing your chances of landing interviews.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What additional features does the ResuFlex AI Resume Builder include?</p>
                    <p className="mt-3 text-base text-gray-600">Beyond resume creation, ResuFlex AI Resume Builder offers features like a Resume Summary Generator, AI Bullet Point Writer, Cover Letter Writer, and job application tracking. These tools are integrated to streamline your job search and boost your application’s effectiveness.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Can I edit my resume directly from my browser?</p>
                    <p className="mt-3 text-base text-gray-600">Absolutely! With our integrated Chrome Extension, you can edit your resume directly within your browser. This feature makes it convenient to update your resume on the go, ensuring you’re always ready to apply for new opportunities.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What is the AI Bullet Point Writer, and how does it work?</p>
                    <p className="mt-3 text-base text-gray-600">The AI Bullet Point Writer generates impactful, tailored bullet points for your resume based on your job experience. It uses AI to highlight key achievements and responsibilities, ensuring your resume is concise, engaging, and optimized for specific job descriptions.</p>
                </div>

            </div>
        </div>
    </div>
</section>

  )
}

export default FaqSection