import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../api";

export default function RoomDetail() {
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery([`room:${roomPk}`], getRoom);
    console.log(data);

    return (
        <>
            <h1>{data?.id}</h1>
            <div>{data.owner.name}</div>
            <div>{data.category.name}</div>
        </>
    );
}
