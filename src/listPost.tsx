import { useAppSelector } from "./hooks";
import { IPost } from "./slices/mainSlice";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { useGetPostsQuery } from "./slices/rtkQuery/mainPosts";

const ListPost: React.FC<{}> = () => {
    const { posts } = useAppSelector((state) => state.main);

    const { data, isSuccess, isError } = useGetPostsQuery(undefined);

    console.log(isSuccess && data);

    return (
        <UnorderedList>
            {data?.map((post) => {
                return <ListItem>{post.title}</ListItem>;
            })}
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
    );
};

export default ListPost;
