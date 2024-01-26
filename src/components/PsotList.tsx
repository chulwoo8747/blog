import { Link } from "react-router-dom"

interface PostListProps {
    hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div className="post__navigation--active">전체</div>
                    <div>나의 글</div>
                </div>
            )}
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">작성자</div>
                                <div className="post__date">2024.01.19 금요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Doneceget pretium nunc. Duis sed arcu eget leo maximus fermentum
                                velut risus. Morbi quis enim consequat, venenatis mauris
                                a,bibendum justo. Vestibulum eros risus, feugiat eget auctor et,
                                lacinia in quam. Pellentesque pellentesque nunc ultricies nulla
                                convallis finibus. Nulla interdum laoreet ex, id euismod arcu.
                                Vestibulum pulvinar sem dolor, in laoreet nunc faucibus eu.
                                Suspendisse convallis vehicula turpis ut dignissim. Sed nec
                                turpis suscipit, ultricies nisi non, ullamcorper diam. Duis non
                                ullamcorper enim. Suspendisse egestas lorem sed enim gravida,
                                sit amet ultricies ligula dignissim. Praesent nec consequat est.
                                Praesent interdum blandit dolor, a dapibus erat gravida ut.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}