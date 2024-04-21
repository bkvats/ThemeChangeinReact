import React from "react";

export default function Card() {
    return (
        <div className=" max-w-sm p-2 rounded-lg shadow-xl flex flex-col items-center gap-3 dark:bg-gray-900 ">
            <div className="rounded-lg overflow-hidden">
                <img src="src/components/template_image.jpg" alt="card_img"/>
            </div>
            <div className="dark:text-white">
                <div>
                    <h1 className="text-4xl my-1 font-bold">Product Title</h1>
                    <p className="text-gray-500 font-semibold dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam officiis aperiam reiciendis delectus optio enim laudantium, ducimus illo, facere quo sunt. Vel laboriosam at adipisci, veritatis repellendus incidunt officiis rem.</p>
                </div>
                <div className="my-4">
                    <div className="flex justify-around items-center">
                        <p className="text-xl font-bold">$ XXXX/-</p>
                        <div className="flex flex-col gap-1">
                            <button className="text-xl bg-gray-900 text-white p-2 rounded-lg dark:text-gray-900 dark:bg-white dark:font-semibold">Buy now</button>
                            <button className="text-xl bg-gray-500 text-white p-2 rounded-lg dark:text-gray-900 dark:bg-[#c3bcbc] dark:font-semibold">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}