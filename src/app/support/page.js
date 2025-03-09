import React from "react";
import "./styles.css";

const SupportPage = () => {
  return (
    <div className="h-screen bg-slate-800">
      <div className="border-b-[1px] border-gray-500 p-6">
        <div className="container">
          <p className="text-2xl font-semibold">
            Support and FAQs for SwimFast
          </p>
        </div>
      </div>
      <div className="align-center flex flex-col justify-center py-6">
        <p className="text-center text-4xl font-semibold">
          Frequently Asked Questions
        </p>
        <div>
          <div className="pt-3 text-center text-xl font-[550]">
            How do I create an account?
          </div>
          <div className="pt-1 text-center">
            To create an account, click the &quot;Sign Up&quot; button during
            the onboarding process and follow the instructions to register using
            your email address.
          </div>
          <div className="pt-3 text-center text-xl font-[550]">
            I only see a search bar on the search page. How do I view the times?
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-[85%] pt-1 text-center sm:w-[50%]">
              Nothing appearing is simply because you have not searched for
              anyone yet. Click on the search bar at the bottom of the search
              page, type their first and last names, and search!
            </div>
          </div>
          <div className="pt-3 text-center text-xl font-[550]">
            How do I change the theme?
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-[85%] pt-1 text-center sm:w-[50%]">
              Different themes are offered inside of the settings menu under
              General &gt; Appearance. The default is dark but you can change it
              to light if you prefer.
            </div>
          </div>
          <div className="pt-3 text-center text-xl font-[550]">
            Things are not loading properly. What should I do?
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-[85%] pt-1 text-center sm:w-[50%]">
              If something is stuck loading or not appearing correctly, check
              your network connection and try refreshing the app. If the issue
              persists, please contact support at support@alexs.software or
              report an issue using the form in the settings menu.
            </div>
          </div>
        </div>
        <div className="mt-10 flex h-[10vh] w-auto items-center justify-center self-center rounded-2xl bg-slate-700 p-10 text-xl">
          Support Email: support@alexs.software
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
