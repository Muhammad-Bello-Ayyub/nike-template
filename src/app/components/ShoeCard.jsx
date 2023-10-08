'use client'

import Image from "next/image"

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe ){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
    <div 
        className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red ' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick} >
        <div className="flex justify-center items-center bg-cover bg-center sm:w-36 sm:h-36 rounded-xl max-sm:p-4 bg-[#C1C4DE]" style={{ backgroundImage: `url('/assets/images/shoethumbnail-background.png')` }}>
            <Image 
                width={127}
                height={103}
                alt="shoe collection" 
                src={imgURL.thumbnail}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard