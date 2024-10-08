
export default function ContactSection() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-fit self-center">
                <h1 className='text-4xl font-mono font-extrabold'>Contact me!</h1>
            </div>
            <div>
                <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                <input name="fullname" className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="" />
            </div>
            <div>
                <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input name="email" className="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" />
            </div>
            <div>
                <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                <textarea name="message"
                    className="w-full h-32 bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div>
                <button
                    className="uppercase text-sm font-bold tracking-wide bg-gray-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </div>
    )

}