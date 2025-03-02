import React from 'react'

const Signup = () => {
  return (
    <div id='signUp'>
    <div  className="flex items-center md:min-h-[80vh] min-h-[80vh] md:w-[95%] w-[90%] md:mx-10 mx-6 md:mt-14 rounded-3xl mt-10 justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 dark:from-purple-900 dark:via-pink-950 dark:to-yellow-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50 blur-2xl"></div>
      <div className="relative max-w-sm w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 border-4 border-purple-200 dark:border-black transform transition duration-300 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="relative text-center text-4xl font-extrabold text-purple-600">𝑺𝒊𝒈𝒏 𝑼𝒑</div>
        <form className="relative mt-6 space-y-6">
        <div className='flex gap-4'>
          <label className="relative block">
            <input required className="w-full p-4 pl-4 bg-gray-100 dark:bg-gray-600 border-none rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 shadow-md transition-all duration-300" type="text" name="first-name" placeholder="𝘍𝘪𝘳𝘴𝘵 𝘕𝘢𝘮𝘦" />
          </label>
          <label className="relative block">
            <input required className="w-full p-4 pl-4 bg-gray-100 dark:bg-gray-600 border-none rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 shadow-md transition-all duration-300" type="text" name="last-name" placeholder="𝘓𝘢𝘴𝘵 𝘕𝘢𝘮𝘦" />
          </label>
          </div>
          <label className="relative block">
            <input required className="w-full p-4 pl-4 bg-gray-100 dark:bg-gray-600 border-none rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 shadow-md transition-all duration-300" type="email" name="email" placeholder="𝘌𝘯𝘵𝘦𝘳 𝘺𝘰𝘶𝘳 𝘦𝘮𝘢𝘪𝘭" />
          </label>
          <label className="relative block">
            <input required className="w-full p-4 pl-4 bg-gray-100 dark:bg-gray-600 border-none rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 shadow-md transition-all duration-300" type="password" name="password" placeholder="𝘌𝘯𝘵𝘦𝘳 𝘺𝘰𝘶𝘳 𝘱𝘢𝘴𝘸𝘰𝘳𝘥" />
          </label>
          <label className="relative block">
            <input required className="w-full p-4 pl-4 bg-gray-100 dark:bg-gray-600 border-none rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 shadow-md transition-all duration-300" type="password" name="confirm-password" placeholder="𝘊𝘰𝘯𝘧𝘪𝘳𝘮 𝘺𝘰𝘶𝘳 𝘱𝘢𝘴𝘴𝘸𝘰𝘳𝘥 " />
          </label>
          <div className="relative w-full text-center py-4 bg-gradient-to-r from-purple-500 to-yellow-500 text-white rounded-full shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95">𝑺𝒊𝒈𝒏 𝑼𝒑</div>
        </form>
        <div className="relative text-center mt-6 md:text-sm text-xs text-gray-500 cursor-pointer font-bold">𝘈𝘭𝘳𝘦𝘢𝘥𝘺 𝘩𝘢𝘷𝘦 𝘢 𝘚𝘸𝘪𝘧𝘵𝘤𝘢𝘳𝘵 𝘢𝘤𝘤𝘰𝘶𝘯𝘵 ?<a href="/Login"><span className='text-primary hover:underline transition-all duration-300 mx-2'>𝑳𝒐𝒈 𝑰𝒏 ➜</span></a></div>
      </div>
    </div>
    </div>
  )
}

export default Signup
