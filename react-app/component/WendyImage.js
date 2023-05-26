import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";

export default function WendySelect() {

    const itemData = [
        {
            img: '/assets/images/wendy.jpeg',
            title: 'wendy1',
        },
        {
            img: '/assets/images/wendy1.jpeg',
            title: 'wendy2',
        },
        {
            img: '/assets/images/wendy2.jpeg',
            title: 'wendy3',
        }
    ]

    return (
        <>
        <h1>~집중하는 윤지~</h1>
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
            {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
        <h1>사랑해 윤지얌</h1>
        <img
                src={"/assets/images/we.jpeg?w=164&h=164&fit=crop&auto=format"}
                srcSet={"/assets/images/we.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
                alt="withWendy"
                loading="lazy"
                />

      </>
    );
}