/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdLocationOn } from "react-icons/md";

interface IShop {
    name: string;
    avatar: string;
    address: string;
}

const Shop: React.FC<IShop> = ({ name, avatar, address }) => {
    return (
        <div className="flex rounded-md shadow-mui-1 border border-gray-200 p-4">
            <img
                src={avatar}
                width={75}
                height={75}
                alt="logo"
                className="rounded-full mr-4"
            />

            <div>
                <div className="font-semibold text-xl">{name}</div>

                <div className="text-xs opacity-70 line-clamp-2 mt-2">
                    <MdLocationOn className="inline-block text-lg mr-1" />
                    {address}
                </div>
            </div>
        </div>
    );
};

const Shops = () => {
    const shops: Array<IShop> = [
        {
            name: "Shop 1",
            avatar: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F886%2Fconversions%2FBackpack-thumbnail.jpg&w=1920&q=75",
            address: "588  Finwood Road, New Jersey, East Dover, 08753, USA",
        },
        {
            name: "Shop 2",
            avatar: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F891%2Fconversions%2FGroup-36321-thumbnail.jpg&w=1920&q=75",
            address: "4885  Spring Street, Illinois, Lincoln, 62656, USA",
        },
        {
            name: "Shop 3",
            avatar: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F890%2Fconversions%2Fbakery-thumbnail.jpg&w=1920&q=75",
            address: "1740  Bedford Street, Alabama, Michigan, 35203, USA",
        },
        {
            name: "Shop 4",
            avatar: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F889%2Fconversions%2FMakeup-thumbnail.jpg&w=1920&q=75",
            address: "123, Main Street, New York",
        },
        {
            name: "Shop 5",
            avatar: "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F886%2Fconversions%2FBackpack-thumbnail.jpg&w=1920&q=75",
            address: "123, Main Street, New York",
        },
    ];

    return (
        <div className="w-full h-full px-3 md:px-40 md:py-10 bg-gray-50">
            <h3 className="text-2xl font-semibold pb-8 pt-4">All shops</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shops.map((shop) => (
                    <Shop key={shop.name} {...shop} />
                ))}
            </div>
        </div>
    );
};

export default Shops;
