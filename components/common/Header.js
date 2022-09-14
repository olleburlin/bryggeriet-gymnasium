import React from "react";
import MenuItem from "./MenuItem";
import { flatListToHierarchical } from "../../utils/flatListToHierarchical";
import Headroom from "react-headroom";
import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import LogoBlack from "./LogoBlack";

function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);

  const menu = flatListToHierarchical(data.wpMenu.menuItems.nodes);

  return (
    <Headroom>
      <div className="bg-white w-full z-30">
        <nav className="flex flex-wrap items-center justify-between w-full p-4 lg:p-8 ">
          <div className="flex items-center flex-shrink-0 mr-6 ">
            <Link to="/">
              <div className="w-40 lg:w-56">
                <LogoBlack />
              </div>
            </Link>
          </div>
          <div className="hidden xl:flex flex-row items-center gap-8">
            <div className="space-x-8 h-full flex flex-row items-center text-lg xl:text-xl font-bold uppercase">
              {menu.map((menuItem, i) => (
                <MenuItem key={i} menuItem={menuItem} />
              ))}
            </div>
          </div>
          <div
            className={`${
              isExpanded ? "" : ""
            } z-50  relative inline-block xl:hidden`}
          >
            <Hamburger
              toggled={isExpanded}
              toggle={toggleExpansion}
              onClick={() => toggleExpansion(!isExpanded)}
              size="32"
              style={{ padding: "0", margin: "0" }}
            />
          </div>
          {isExpanded && <MobileMenu menuItems={menu} />}
        </nav>
      </div>
    </Headroom>
  );
}

export default Header;

function MobileMenu({ menuItems }) {
  useLockBodyScroll();
  const mobileMenuItems = menuItems;

  const mobileMenu = flatListToHierarchical(mobileMenuItems);
  return (
    <div className="fixed top-0 left-0 overflow-x-hidden z-40 bg-white  inset-0 h-screen p-4">
      <div className="relative h-full    text-black font-bold">
        <div className="flex relative">
          <Link to="/">
            <div className="w-40 lg:w-56">
              <LogoBlack />
            </div>
          </Link>
        </div>

        <div className="pt-8 pb-4   text-2xl md:text-3xl ">
          <div className="mt-6 flex flex-col justify-center h-full">
            <div className="mt- space-y-4 max-w-xl w-full mx-auto">
              {mobileMenu.map((menuItem) => {
                return (
                  <div key={menuItem.id}>
                    {menuItem.childItems.nodes.length === 0 ? (
                      <div className="">
                        <Link to={menuItem.uri} className="block ">
                          {menuItem.label}
                        </Link>
                      </div>
                    ) : (
                      <div className="" key={menuItem.id}>
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="w-full">
                                <div className="flex flex-row items-center justify-between w-full  overflow-hidden relative">
                                  <div>{menuItem.label}</div>
                                  <div className="w-6 overflow-hidden absolute right-0">
                                    <ChevronUpIcon
                                      className={`${
                                        open
                                          ? "transition-all"
                                          : "transition-all  transform rotate-180"
                                      } `}
                                    />
                                  </div>
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel
                                as="div"
                                className="space-y-4 my-4 px-4 text-xl"
                              >
                                {menuItem.childItems.nodes.map((post) => {
                                  return (
                                    <div key={post.id}>
                                      <Link to={post.uri}>
                                        <div key={post.id} className="">
                                          {post.label}
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
