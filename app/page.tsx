"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { DetailedHTMLProps, SVGProps, useEffect, useState } from "react";

export default function Home() {
  let search = useSearchParams();
  let search_tab1 = search.get("tab1");
  let [nav_toggle, set_nav_toggle] = useState(false);

  return (
    <div className="theme_catppuccin_latte min-w-screen bg-base00">
      <main
        className={
          " mx-auto max-w-[90rem]  bg-base00 text-base05 font-hi flex flex-col  px-8 " +
          (nav_toggle ? "overflow-auto max-h-screen" : "")
        }
      >
        <nav
          className={
            "bg-base00 flex flex-col z-50  top-0 py-4   " +
            (nav_toggle
              ? "absolute w-screen min-h-screen  left-0  gap-4 justify-start px-8"
              : "sticky")
          }
        >
          <div className="w-full flex justify-between place-items-center">
            <a className="gap text-[1.6rem] font-[700]">CarbonLabs</a>
            <NavItems
              float_nav={nav_toggle}
              className={"" + (nav_toggle ? "hidden" : "hidden xl:flex")}
            />
            <ol
              className={
                "flex gap-2 place-items-center " + (false ? "flex-col" : "")
              }
            >
              <li>
                <BtnPrimary href="?" className="sm:block hidden">
                  Try CarbonLabs Today
                </BtnPrimary>
              </li>
              <li>
                <button
                  className={" " + (nav_toggle ? "block" : "block xl:hidden")}
                  onClick={() => set_nav_toggle(!nav_toggle)}
                >
                  <Image
                    src="/burger_menu.svg"
                    alt="arrow_down"
                    width={32}
                    height={32}
                  />
                </button>

                <BtnSecondary
                  href="?"
                  className={"hidden " + (nav_toggle ? "" : "xl:block ")}
                >
                  Chat With Us
                </BtnSecondary>
              </li>
            </ol>
          </div>
          <NavItems
            float_nav={nav_toggle}
            className={"" + (nav_toggle ? "flex flex-col" : "hidden ")}
          />
        </nav>
        <section className="pt-4 flex flex-col gap-2 ">
          <div className="flex flex-col lg:flex-row gap-20 bg-base01 overflow-hidden px-6 py-16 rounded-4xl">
            <div className=" flex flex-col gap-2 ">
              <div className="flex gap-2 items-middle ">
                <Star className="text-base08 size-6" />
                <p>Best carbon service ever made</p>
              </div>
              <h1 className="text-[2.5rem] font-[600]">
                Access the most powerful Carbons in the world
              </h1>
              <p className="text text-[1.1rem]">
                From carbon neutrons to carbon protons we got you covered.
                Carbon is fully automated and you get ready to use electrons.
                Try today and get free pack of carbon atoms.
              </p>
              <div className="flex flex-wrap  gap-2">
                <BtnPrimary href="?" className="w-full sm:w-auto">
                  Try CarbonLabs Today
                </BtnPrimary>
                <BtnSecondary href="?" className="w-full sm:w-auto">
                  Start with google
                </BtnSecondary>
              </div>
              <div className="border-l-6 border-base08 pl-2 mt-6">
                <p>
                  Carbon scrapping api now supports <br /> self destructing
                  features
                </p>
              </div>
            </div>
            <div className="relative flex justify-center place-items-center py-5 px-10 mx-auto ">
              <div className="relative w-[10rem] h-[10rem] sm:w-[16rem] sm:h-[16rem] grid place-items-center">
                <ParticleE className="rotate-[0deg] animate-[spin_4s_linear_infinite]" />
                <ParticleE className="rotate-[45deg] animate-[spin_6s_linear_infinite]" />
                <ParticleE className="rotate-[90deg] animate-[spin_5s_linear_infinite]" />
                <ParticleE className="rotate-[120deg] animate-[spin_6s_linear_infinite]" />
                <ParticleE className="rotate-[180deg] animate-[spin_7s_linear_infinite]" />
                <ParticleE className="rotate-[260deg] animate-[spin_6s_linear_infinite]" />
                <div className="grid grid-cols-4 grid-rows-3 justify-center animate-[spin_6s_linear_infinite]">
                  <div></div>
                  <ParticleP />
                  <ParticleP />
                  <div></div>
                  <ParticleP />
                  <ParticleN />
                  <ParticleN />
                  <ParticleN />
                  <ParticleP />
                  <ParticleP />
                  <ParticleP />
                  <ParticleN />
                  <div></div>
                  <ParticleN />
                  <ParticleN />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Worm>
            {[...Array(10).keys()].map((a) => (
              <div key={a} className="px-10 py-10  grow-0 shrink-0 basis-0">
                <div className="whitespace-nowrap font-bold text-[1.3rem]">
                  Company {a}
                </div>
              </div>
            ))}
          </Worm>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-center text-[2.5rem] font-[600]">
            Carbon for every usecase - All in one platform
          </h2>
          <ol className="whitespace-nowrap flex flex-wrap justify-center items-center bg-base01 p-4 gap-2 rounded-2xl">
            <li>
              <BtnRainbow
                href="?tab1=0"
                scroll={false}
                replace={false}
                pressed={search_tab1 == "0" || search_tab1 == undefined}
              >
                Carbon Training
              </BtnRainbow>
            </li>
            <li>
              <BtnRainbow
                href="?tab1=1"
                scroll={false}
                replace={false}
                pressed={search_tab1 == "1"}
              >
                E-Store
              </BtnRainbow>
            </li>
            <li>
              <BtnRainbow
                href="?tab1=2"
                scroll={false}
                replace={false}
                pressed={search_tab1 == "2"}
              >
                Carbon Inteligence
              </BtnRainbow>
            </li>
            <li>
              <BtnRainbow
                href="?tab1=3"
                scroll={false}
                replace={false}
                pressed={search_tab1 == "3"}
              >
                Carbon Security
              </BtnRainbow>
            </li>
            <li>
              <BtnRainbow
                href="?tab1=4"
                scroll={false}
                replace={false}
                pressed={search_tab1 == "4"}
              >
                Custom Carbon
              </BtnRainbow>
            </li>
          </ol>
          {search_tab1 == "0" || !search_tab1 ? (
            <div className="grid md:grid-cols-[1fr_auto] items-center  gap-4">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 bg-base01 rounded-2xl p-8">
                <div className="flex flex-col gap-2 justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col ">
                      <h3 className="text-[2rem] font-[600]">
                        Carbon Training and CARB
                      </h3>
                      <p className="text-[1.1rem]">
                        Carbon is a great full for all your needs. Real time
                        carbon for all types of fires and machines.
                      </p>
                    </div>
                    <Fire className="shrink-0 self-center hidden md:block lg:hidden size-[15rem] lg:size-[20rem] text-base03 mx-auto" />
                  </div>
                  <Fire className="self-center block md:hidden size-[15rem] text-base03 mx-auto" />
                  <div className="grid grid-cols-1 sm:grid-cols-2   items-stretch gap-2  sm:mr-auto">
                    <BtnThirdly href="?" className="whitespace-nowrap">
                      Multi carbon data
                    </BtnThirdly>
                    <BtnThirdly href="?" className="whitespace-nowrap">
                      Real time carbon
                    </BtnThirdly>
                    <BtnThirdly href="?" className="whitespace-nowrap">
                      Web for carbon
                    </BtnThirdly>
                    <BtnThirdly href="?" className="whitespace-nowrap">
                      Talk to carbon
                    </BtnThirdly>
                  </div>
                </div>
                <Fire className="self-center hidden lg:block size-[15rem] lg:size-[20rem] text-base03 mx-auto" />
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col w-full sm:h-full gap-4">
                <div className="p-5 lg:p-10 bg-base01 w-full sm:h-full rounded-2xl flex flex-col justify-center gap-2">
                  <p className="text-[1.4rem] lg:text-[1.6rem] font-bold whitespace-nowrap">
                    {"= 6 neutrons"}
                  </p>
                  <p className="text-[1.1rem] font-[500] ">average proton</p>
                </div>
                <div className="p-5 lg:p-10 bg-base01 w-full sm:h-full rounded-2xl flex flex-col justify-center gap-2">
                  <p className="text-[1.4rem] lg:text-[1.6rem] font-bold whitespace-nowrap">
                    {"99%+ quality"}
                  </p>
                  <p className="text-[1.1rem] font-[500]">
                    carbon harvesting quality
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {search_tab1 != "0" && search_tab1 ? (
            <div className="">
              <div className="flex flex-col gap-2 bg-base01 rounded-2xl p-8">
                <h3 className="text-[2rem] font-[600]">TAB {search_tab1}</h3>
                <p className="text-[1.1rem]">
                  Carbon is a great full for all your needs. Real time carbon
                  for all types of fires and machines.
                </p>
                <Fire className=" mt-4 size-50 text-base08 mx-auto" />
                <div className="flex flex-col gap-2  items-start">
                  <BtnPrimary href="?">Multi carbon data</BtnPrimary>
                  <BtnPrimary href="?">Real time carbon</BtnPrimary>
                  <BtnPrimary href="?">Web for carbon</BtnPrimary>
                  <BtnPrimary href="?">Talk to carbon</BtnPrimary>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

function Star(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

function Fire(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
      />
    </svg>
  );
}

function Worm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative isolate h-[7rem]  animate-pause  overflow-x-auto">
      <div className="flex absolute top-0 left-0     grow-0 shrink-0 basis-auto z-10 transform translate-x-[-100%] animate-worm ">
        {children}
      </div>
      <div className="flex absolute top-0 left-0   grow-0 shrink-0 basis-auto animate-worm">
        {children}
      </div>
    </div>
  );
}

function BtnRainbow({
  children,
  pressed = false,
  ...rest
}: {
  children: React.ReactNode;
  pressed?: Boolean;
} & LinkProps<any>) {
  // let glow = false;
  return (
    <div
      className={
        " rounded-2xl p-[0.2rem] " + (pressed ? "bg-rainbow-on" : "bg-rainbow")
      }
    >
      <Link
        className={
          "border-0        rounded-2xl block  w-full sm:w-auto text-center py-2 px-4 font-medium " +
          (pressed
            ? "bg-base05 text-base00 hover:bg-base05"
            : "bg-base00 text-base05 hover:bg-base00")
        }
        {...rest}
      >
        {children}
      </Link>
    </div>
  );
}

function BtnPrimary({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: String } & LinkProps<any>) {
  return (
    <Link
      className={
        "block hover:bg-base05 bg-base0D text-center text-base00 font-medium py-2 px-4 rounded " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}
function BtnSecondary({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: String } & LinkProps<any>) {
  return (
    <Link
      className={
        "block hover:bg-base05 border-2 bg-base00 text-center text-base05 hover:text-base00 font-medium py-2 px-4 rounded " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}
function BtnThirdly({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: String } & LinkProps<any>) {
  return (
    <Link
      className={
        "block hover:bg-base05 bg-base00 text-center text-base05 hover:text-base00 font-medium py-2 px-4 rounded-2xl " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}

function NavItem({
  text,
  open,
  float_nav,
  on_click,
}: {
  text: String;
  open?: Boolean;
  float_nav?: Boolean;
  on_click?: () => void;
}) {
  return (
    <div className=" flex flex-col gap-2 px-2 ">
      <button
        onClick={on_click}
        className="cursor-pointer font-[600] flex gap-2"
      >
        {text}
        <Image src="/arrow_down.svg" alt="arrow_down" width={16} height={16} />
      </button>
      <div
        className={
          " flex flex-col gap-4   bg-base00 " +
          (open
            ? float_nav
              ? ""
              : "absolute bottom-0 left-0 translate-y-full w-full"
            : "hidden")
        }
      >
        <p className="text-[1.0rem] font-[400]">menu "{text}" is open</p>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <ol className={" gap-4 flex flex-col pb-4  "}>
            <li className="">
              <DropdownItemOne
                title="Residential Carbons"
                description="Carbon-like burning"
                price="$500"
                unit="KB"
              />
            </li>
            <li>
              <DropdownItemOne
                title="ISP Carbons"
                description="Fast carbon"
                price="$100"
                unit="E"
              />
            </li>
            <li>
              <DropdownItemOne
                title="Dedicated Carbons"
                description="Dedicated carbon for high fire"
                price="$20"
                unit="E"
              />
            </li>
          </ol>
          <ol className={" gap-4 flex flex-col pb-4  "}>
            <li className="">
              <DropdownItemOne
                title="Residential Carbons"
                description="Carbon-like burning"
                price="$500"
                unit="KB"
              />
            </li>
            <li>
              <DropdownItemOne
                title="ISP Carbons"
                description="Fast carbon"
                price="$100"
                unit="E"
              />
            </li>
            <li>
              <DropdownItemOne
                title="Dedicated Carbons"
                description="Dedicated carbon for high fire"
                price="$20"
                unit="E"
              />
            </li>
          </ol>
          <div className="pb-4">
            <div className="px-4 py-2 flex flex-col gap-2 h-full  bg-base01 rounded-2xl">
              <div className="flex gap-2 items-center">
                <Star className="size-12 text-base03" />
                <p className="text-[1.1rem] font-[700]">Carbon Studio</p>
              </div>
              <p className="max-w-[15rem]">
                Describe what carbon you need. Carbon studio will handle
                everything, from starting fires to spreading fires.
              </p>
              <BtnPrimary href="?">Try Studio Now</BtnPrimary>
            </div>
          </div>
          <div className="pb-4">
            <div className="px-4 py-2 flex flex-col gap-2 h-full justify-between  bg-base01 rounded-2xl">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <Star className="size-12 text-base03" />
                  <p className="text-[1.1rem] font-[700]">Carbon Scrapper</p>
                </div>
                <p className="max-w-[15rem]">
                  Scrape every carbon in the world.
                </p>
              </div>
              <BtnSecondary href="?">Try Now</BtnSecondary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItems({
  className,
  float_nav,
  ...rest
}: { className?: String; float_nav?: Boolean } & DetailedHTMLProps<
  React.OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>) {
  let [open, set_open] = useState<null | number>(null);

  useEffect(() => {
    console.log(float_nav);
  }, [float_nav]);

  let on_click = (name: number) => {
    console.log(`${open} === ${name}`);
    set_open(open === name ? null : name);
  };

  return (
    <ol className={className + "  gap-2 "} {...rest}>
      <li className="group ">
        <NavItem
          open={open === 0}
          on_click={() => {
            on_click(0);
          }}
          float_nav={float_nav}
          text="Carbons"
        />
      </li>
      <li className="">
        <NavItem
          open={open === 1}
          on_click={() => {
            on_click(1);
          }}
          float_nav={float_nav}
          text="Carbon Solutions"
        />
      </li>
      <li className="">
        <NavItem
          open={open === 2}
          on_click={() => {
            on_click(2);
          }}
          float_nav={float_nav}
          text="Data"
        />
      </li>
      <li className="group">
        <NavItem
          open={open === 3}
          on_click={() => {
            on_click(3);
          }}
          float_nav={float_nav}
          text="Carbon Studio"
        />
      </li>
      <li className="group">
        <NavItem
          open={open === 4}
          on_click={() => {
            on_click(4);
          }}
          float_nav={float_nav}
          text="Pricing"
        />
      </li>
      <li className="group">
        <NavItem
          open={open === 5}
          on_click={() => {
            on_click(5);
          }}
          float_nav={float_nav}
          text="Resources"
        />
      </li>
    </ol>
  );
}

function Cube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
}

function DropdownItemOne({
  title,
  description,
  price,
  unit,
}: {
  title: string;
  description: string;
  price: string;
  unit: string;
}) {
  return (
    <div className="max-w-[22rem] flex gap-2 place-items-center">
      <Cube className="size-12" />
      <div className="flex flex-col   ">
        <a href="?" className="font-[700] ">
          {title}
        </a>
        <p>{description}</p>
      </div>
      <div className="ml-auto pl-2 border-l-2 border-base03 flex flex-col">
        <p className="font-[600] whitespace-nowrap">Start from</p>
        <p>
          <span className="text-base09">{price}</span>/{unit}
        </p>
      </div>
    </div>
  );
}

function ParticleP() {
  return (
    <div className="shrink-0 bg-base08 text-base00 py-1 px-[0.6rem] sm:px-3 font-bold text-[0.8rem] sm:text-[1.1rem] rounded-full">
      P
    </div>
  );
}

function ParticleN() {
  return (
    <div className="shrink-0 bg-base0A text-base00 py-1 px-[0.6rem] sm:px-3 font-bold text-[0.8rem] sm:text-[1.1rem] rounded-full">
      N
    </div>
  );
}

function ParticleE({ className }: { className?: String }) {
  return (
    <div
      className={
        "absolute  inset-0 text-base00 flex items-start " +
        className
      }
    >
      <div className="shrink-0 bg-base0D py-1 px-[0.6rem] sm:px-3 font-bold text-[0.8rem] sm:text-[1.1rem] rounded-full">
        E
      </div>
    </div>
  );
}
