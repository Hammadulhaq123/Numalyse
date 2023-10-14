# How to Contribute?

Individuals interested in contributing to our software are encouraged to enhance the user experience by focusing on the design and layout of the website. Whether it's crafting a visually appealing interface or optimizing the layout for intuitive navigation, your creative input is highly valued. Additionally, you have the flexibility to make meaningful contributions in two distinct ways. You can either create complete functionalities, including the function's logic and frontend components, ensuring seamless rendering of data on the web pages. Alternatively, you can contribute by building specific functions that solve mathematical problems and submit a pull request. If the functionality meets the required standards and functions correctly, your work will be accepted, and the results will be integrated into the software. Your expertise and dedication can play a significant role in shaping the user experience and expanding the capabilities of our software.
More about design and layout is described below.

## Tech Stack

**Client:** ReactJS, NextJS, TailwindCSS

**Server:** NodeJS, functionPlot, d3, mathjs (Execution and computation of funtions)

## File & Folder Structure

| Folder                   | Detail              | Description                                                                           |
| :----------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| `/app/solve/`            | `list dir`          | The page.js file in this directory is rendering a list of all the methods of the web. |
| `/app/solve/components/` | `local components`  | Components that are only being rendered in listing methods.                           |
| `/app/solve/methods/`    | `route dir`         | Route directory that is rendering each route specific to a function.                  |
| `/components/`           | `global components` | Components that are being rendered on the main layout (i.e. sidebar, navbar)          |
| `/RequiredInputs/`       | `user input`        | Components that are taking input and executing reltd. function on input.              |
| `/AnalysisDisplays/`     | `result display`    | Components that are representing the result of the function execution to the user.    |

## Layout

Flex Layout is preferred Sidebar & Navbar is being rendered globally through layout.js. Apart from that an ad container and graph container on the right handside of the website is being rendered on all `/solve/method/` routes only on desktop devices. The height of the adContainer is auto. You don't have to worry about it. Your part is to create a route dir with a `page.js` file in `/solve/method/` Consider using the paddings and margins described below, and using flex layout with a flex direction column. One more thing to keep in mind is the widths you've to give `width: 100%` on mobile devices to the component and on desktop it's upto you, don't forget to give the `border-radius` described below.

## Color Reference

| Color            | Hex                                                              |
| ---------------- | ---------------------------------------------------------------- |
| Black Color      | ![#2e2e2e](https://via.placeholder.com/10/2e2e2e?text=+) #2e2e2e |
| Green Color      | ![#04aa6d](https://via.placeholder.com/10/04aa6d?text=+) #04aa6d |
| Gray Color       | ![#1c1c1c](https://via.placeholder.com/10/1c1c1c?text=+) #1c1c1c |
| Light Gray Color | ![#f3f4f6](https://via.placeholder.com/10/f3f4f6?text=+) #f3f4f6 |

## Margins, Padding & Border Radius

| Component        | Margin       | Padding   | Border-Radius |
| :--------------- | :----------- | :-------- | :------------ |
| Parent Component | `y:1rem x:0` | `xy:1rem` | `20px`        |
| Child Component  | `xy:0rem`    | `xy:1rem` | `16px`        |

## Feedback

If you have any query, please reach out to me at hammadamir966@gmail.com
