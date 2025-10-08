export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent mb-2">
              APEX
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with precision and purpose.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <button className="hover:text-[#FFB32C] transition-colors">About</button>
            <button className="hover:text-[#FFB32C] transition-colors">Services</button>
            <button className="hover:text-[#FFB32C] transition-colors">Work</button>
            <button className="hover:text-[#FFB32C] transition-colors">Contact</button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>© 2025 APEX. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-[#FFB32C] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#FFB32C] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#FFB32C] to-transparent opacity-30"></div>
      </div>
    </footer>
  );
}
