# Numalyse

Numalyse is a sophisticated web application meticulously designed to solve a wide array of numerical analysis methods, mathematical, and algebraic problems. Fueled by a profound interest in mathematical programming and the intricacies of Numerical Analysis, this project stands as a testament to my passion and dedication in the field.

At its core, Numalyse serves as a comprehensive solution for students, professionals, and enthusiasts seeking accurate and efficient answers to complex mathematical challenges. Whether it's tackling iterative methods like the Bisection Method and Newton-Raphson Method, or delving into intricate algebraic equations, Numalyse excels in delivering precise solutions.

## Contributing

Contributions are always welcome!

See `CONTRIBUTION.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Cloning the Repository (NodeJS and npm Reqd.)

Clone the project in any directory.

```
  git clone https://github.com/Hammadulhaq123/Numalyse.git
```

Go to the Numalyse directory inside your specified folder.

```
  cd Numalyse/
```

Install the modules required to run the project.

```
  npm install
```

Run the project on local server using following command.

```
  npm run dev
```

##### All set you can now use/update the software according to your requirements.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- Graphical Representation of Algebric Functions
- Table to Excel Exportation.
- Cross Platform
- Ability to work without internet access once loaded.

## Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## FAQ

#### Which version of NextJs is required?

I developed this web application on NextJS version 13.

#### Is App Router required?

App Router is required because I've created all the routes by using the app router's default functionalities.

#### Is it necessary to use TailwindCSS?

I've used TailwindCSS throughout the project except for the default global.css file that comes with NextJS. It is preferred to use TailwindCSS but it's not necessary.

## Feedback

If you have any feedback, please reach out to us at hammadamir966@gmail.com

## Journey of building this project

#### What did I learn while building this project? What challenges I faced and how did you overcome them?

I've learn't alot while working in this project specifically I was concerned about my semester course of Numerical Analysis. I was too much interested into learning Numerical Analysis that I decided to build a website that solve numerical analysis methodologies. But that eager to do something didn't stopped there.

Initially I started working on the project by simply deciding to build the project using NextJs because I wanted to learn the core of NextJS. Also it gave me the ability of using the states, props and contextAPI to transport data from one page to another. One another main reason to use NextJS was it's SSR.

As Soon as I started building the project I had so many design ideas in my mind implemented few ideas left some behind but at the end I was quite sateisfied with the design.

Now the big chunk was creating a functionality that executes on the client side. I created A seperate directory to take user inputs and seperate directory to render the components that displays data.

After taking the user input I executed all the functionality realted to a method in the same component in which I got the data from the user. The reason for doing this is to use less CSR. Once the functions executes in each iteration it stored data into an array that particular array is passed to another component that displays the result.

That's it! That's what I've done so far and I am working on this project with continuity and looking forward to work on more such projects that leads me to excel my craft.

## Copyrights

This is an open-source software based on
[MIT Licensing](https://choosealicense.com/licenses/mit/)
