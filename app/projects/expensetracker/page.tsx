import expenseTrackerImg from '../../../public/aboutImage.jpg';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function ExpenseTrackerPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute left-0 top-0 z-10 h-[30vh] w-full bg-black/60 lg:h-[40vh]" />
        <Image
          className="z-1 absolute"
          layout="fill"
          objectFit="cover"
          src={expenseTrackerImg}
          alt="/"
        />
        <div className="absolute left-[50%] right-[50%] top-[70%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h1 className="py-2">Expense Tracker</h1>
          <h3>Angular / TypeScript / ASP.NET Core / PostgreSQL</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-4">
          <p className="text-xl">Project</p>
          <h2>Overview</h2>
          <p className="py-4 text-lg">
            A full-stack expense tracking application built with Angular,
            TypeScript, ASP.NET Core Web API, Entity Framework Core, and
            PostgreSQL. The app allows users to create, edit, delete, and filter
            expenses, organize them by category, and generate SQL-based spending
            summaries.
          </p>
          <p className="py-4 text-lg">
            I designed a relational database and RESTful API supporting expense
            management, category relationships, and data validation. The
            responsive Angular frontend is integrated with the ASP.NET Core
            backend, and the entire stack (frontend, API, and PostgreSQL
            database) is deployed to the cloud with environment-based
            configuration for managing production settings and sensitive
            credentials.
          </p>
          <a
            href="https://github.com/alai031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2">Open app</button>
          </a>
          <a
            href="https://github.com/alai031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2">Code</button>
          </a>
        </div>
        <div className="col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className="p-2">
            <p className="pb-2 text-center text-lg font-bold">Technologies</p>
            <div className="grid grid-cols-2 text-base md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Angular
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> ASP.NET Core
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Entity Framework Core
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> C#
              </p>
            </div>
          </div>
        </div>
        <Link href="../#projects">
          <p className="cursor-pointer pb-6 pt-8 text-lg underline md:pb-0">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
}
