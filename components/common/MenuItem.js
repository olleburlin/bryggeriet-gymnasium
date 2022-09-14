import React, { useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function MenuItem({ menuItem }) {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useDetectOutsideClick(
    dropdownRef,
    false
  );
  const [mouseOverButton, setMouseOverButton] = useState(false);
  const [mouseOverMenu, setMouseOverMenu] = useState(false);
  const timeoutDuration = 0;
  let timeoutButton;
  let timeoutMenu;

  const onMouseEnterButton = () => {
    clearTimeout(timeoutButton);
    setOpenDropdown(true);
    setMouseOverButton(true);
  };
  const onMouseLeaveButton = () => {
    timeoutButton = setTimeout(
      () => setMouseOverButton(false),
      timeoutDuration
    );
  };

  const onMouseEnterMenu = () => {
    clearTimeout(timeoutMenu);
    setMouseOverMenu(true);
  };
  const onMouseLeaveMenu = () => {
    timeoutMenu = setTimeout(() => setMouseOverMenu(false), timeoutDuration);
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const show =
    (openDropdown && (mouseOverMenu || mouseOverButton)) || mobileOpen;

  return (
    <div className="">
      {menuItem.childItems.nodes.length === 0 ? (
        <Link
          className=" h-full inline-block hover:text-brandorange transition-all hover:text-primary"
          to={menuItem.uri}
        >
          {menuItem.label}
        </Link>
      ) : (
        <Menu>
          <div
            onTouchStart={() => setMobileOpen(!mobileOpen)}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            onKeyPress={null}
            role="button"
            tabIndex="0"
            className="z-40 relative "
          >
            <Menu.Button as="div">
              <div
                className={`${
                  show ? "bg-black text-white" : ""
                } cursor-pointer py-4 px-2   flex flex-row items-center`}
              >
                <Link to={menuItem.uri}>
                  <div>{menuItem.label}</div>
                </Link>
                <div className="w-6 h-6 ">
                  <ChevronDownIcon />
                </div>
              </div>
            </Menu.Button>
          </div>
          <div className="relative">
            <Transition show={show}>
              <Menu.Items
                ref={dropdownRef}
                onMouseEnter={onMouseEnterMenu}
                onMouseLeave={onMouseLeaveMenu}
                static
                className="bg-black text-white px-2 sm:px-0 z-40 absolute right-0  origin-top-right min-w-[16rem]"
              >
                <div className="">
                  <div className="relative z-40   pt-12 pb-8 px-8 ">
                    <nav className="space-y-4 whitespace-nowrap">
                      {menuItem.childItems.nodes.map((subMenuItem, i) => {
                        return (
                          <Menu.Item
                            as="div"
                            key={i}
                            onClick={() => setOpenDropdown(false)}
                          >
                            <div className="space-y-4">
                              <Link
                                className="hover:text-primary "
                                to={subMenuItem.uri}
                              >
                                <div>{subMenuItem.label}</div>
                              </Link>
                            </div>
                          </Menu.Item>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      )}
    </div>
  );
}
