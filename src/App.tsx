import { User, ShoppingCart, ShieldCheck, SlidersHorizontal, Headset, Gift } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* 
        Card Container
        - White with soft shadow
        - Border-radius: 16px+
        - Clean spacing
      */}
      <div 
        className="w-full max-w-7xl bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col flex-1 main-container wrapper"
      >
        
        {/* HEADER */}
        <header className="hero-header px-6 py-5 lg:px-10 lg:py-6 bg-transparent w-full">
          {/* Logo / Bitget */}
          <a href="https://www.bitget.com/" target="_blank" rel="noopener noreferrer" className="logo flex items-center gap-2 list-none no-underline">
            <span className="font-bold text-xl text-black">Bitget</span>
          </a>

          {/* Right Icons */}
          <div className="flex gap-[16px] items-center text-gray-800 header-icons text-xl">
            {/* User Profile Icon */}
            <a href="https://www.bitget.com/login" target="_blank" rel="noopener noreferrer" className="user-icon list-none no-underline flex items-center justify-center transition-opacity cursor-pointer">
              <User size={24} color="#111" strokeWidth={2} />
            </a>

            {/* Cart / Wallet Icon */}
            <a href="https://www.bitget.com/asset" target="_blank" rel="noopener noreferrer" className="cart-icon list-none no-underline flex items-center justify-center transition-opacity cursor-pointer">
              <ShoppingCart size={24} color="#111" strokeWidth={2} />
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <main className="w-full hero flex-1">
          {/* Left Side */}
          <div className="flex flex-col max-w-2xl hero-content">
            <div className="hero-content-inner">
              {/* Title */}
              <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 tracking-tight">
                Trade Crypto.<br />Grow Your Wealth
              </h1>
              
              {/* Subtitle (1 line) */}
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                Trade 800+ cryptocurrencies on a secure platform.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Start Trading Button */}
                <a href="https://www.bitget.com/spot/BTCUSDT" target="_blank" rel="noopener noreferrer">
                  <button className="start-btn bg-[#00d588] hover:bg-[#00c07a] text-white px-8 py-3.5 rounded-xl font-medium text-lg transition-colors flex items-center justify-center shadow-sm shadow-[#00d588]/20">
                    Start Trading
                  </button>
                </a>
                
                {/* Explore Markets Button */}
                <a href="https://www.bitget.com/markets" target="_blank" rel="noopener noreferrer">
                  <button className="explore-btn bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-xl font-medium text-lg transition-all flex items-center justify-center">
                    Explore Markets
                  </button>
                </a>
              </div>
              
              {/* Features (4 icons below) */}
              <div className="features">
                <div className="flex flex-col items-center gap-[6px]">
                   <ShieldCheck size={24} strokeWidth={1.8} color="#111" />
                  <span className="text-[14px] text-[#222] text-center">Secure</span>
                </div>
                <div className="flex flex-col items-center gap-[6px]">
                  <SlidersHorizontal size={24} strokeWidth={1.8} color="#111" />
                  <span className="text-[14px] text-[#222] text-center">Advanced Tools</span>
                </div>
                <div className="flex flex-col items-center gap-[6px]">
                  <Headset size={24} strokeWidth={1.8} color="#111" />
                  <span className="text-[14px] text-[#222] text-center">24/7 Support</span>
                </div>
                <div className="flex flex-col items-center gap-[6px]">
                  <Gift size={24} strokeWidth={1.8} color="#111" />
                  <span className="text-[14px] text-[#222] text-center">Rewards</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
