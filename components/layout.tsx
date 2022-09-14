import Footer from "./common/Footer";
import Meta from "./meta";
import Hero from "./index/Hero";
import Header from "./common/Header";
export default function Layout({ preview, children, isHome }) {
  return (
    <>
      <Meta />
      <div className=" text-secondary antialiased min-h-screen flex flex-col">
        <div className={`${isHome ? "h-screen" : "h-full"} flex flex-col `}>
          <div className="relative z-40">
            <Header />
          </div>
          {isHome && (
            <div id="hero" className="flex h-full  overflow-hidden  relative ">
              <Hero />
            </div>
          )}
        </div>
        <div className="flex-grow ">
          <main className="">{children}</main>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}
