import { atom } from "recoil";

export const blogState = atom({
    key: 'Blogs',
    default: [{
        id:1,
        heading: "Blog 1",
        content: "this is a blog" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!",
        field: "Full-Stack Development",
        languages: ['JS'],
        frameworks: ['React'],
        dependencies: ['Node', 'Axios'],
        author: "ABC XYZ",
        publishDate: new Date(),
        favorite: true,
    },
    {
        id:2,
        heading: "Blog 2",
        content: "this is a blog" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae vero inventore laborum recusandae accusamus saepe numquam ea illo exercitationem vitae, sequi omnis, alias odio quos temporibus nesciunt. Quae voluptate esse ea quis, aliquam assumenda molestiae laboriosam provident cum perferendis iure iste magni reprehenderit, similique hic debitis reiciendis illum magnam!",
        field: "Full-Stack Development",
        languages: ['JS'],
        frameworks: ['React'],
        dependencies: ['Node', 'Axios'],
        author: "ABC XYZ",
        publishDate: new Date(),
        favorite: true,
    },
]
}
)
