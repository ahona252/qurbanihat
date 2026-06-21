import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-6 md:p-12 font-sans selection:bg-blue-500/10 selection:text-blue-600">
      {/* Top Brand Navigation Placeholder */}
      <div className="max-w-7xl w-full mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-lg">
          <div className="h-6 w-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            ◆
          </div>
          <span>EnterprisePlatform</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12">
        <div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Error 404
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            We couldn’t find that page
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The page you are looking for doesn’t exist or has been permanently moved. 
            Please check the URL or choose one of the options below to navigate back.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto text-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 active:scale-[0.99]"
            >
              Go to Dashboard
            </Link>
            
            <Link
              href="/support"
              className="w-full sm:w-auto text-center px-5 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium rounded-lg shadow-sm transition duration-150"
            >
              Contact Support
            </Link>
          </div>

          {/* Helpful Navigation Directory */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Popular Pages
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Link href="/pricing" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
                Pricing & Plans →
              </Link>
              <Link href="/docs" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
                Documentation →
              </Link>
              <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
                Company Blog →
              </Link>
              <Link href="/status" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
                System Status →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Minimalist Illustration (CSS-based) */}
        <div className="hidden lg:flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-2xl p-12 aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <div className="relative text-center z-10">
            <div className="text-9xl font-black tracking-tighter text-slate-200/80 select-none">
              404
            </div>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
            <p className="text-xs font-mono text-slate-400 mt-6 tracking-widest uppercase">
              Requested resource is missing
            </p>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="max-w-7xl w-full mx-auto border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 EnterprisePlatform Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  )
}