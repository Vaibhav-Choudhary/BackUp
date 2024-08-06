function Card({post}){

    return (<div>
        <p className="font-bold " >{post?.title}</p>

        <p className="text-[15px]">
            by <span className="italic">{post?.author} on <span className="underline font-semibold">{post.category}</span></span>
        </p>
        <p className="text-[12px] font-medium">Posted on {post.date}</p>

        <p className="mt-2">{post.content}</p>

        <div className="flex gap-x-2 flex-wrap">
            {
                post.tags.map ( (tag,index)=>{
                    return <span className="text-blue-500 underline font-bold text-[12px] mt-2 " key={index}>{`#${tag}`}</span>
                }

                )
            }
        </div>
         



    </div>)

}

export default Card;