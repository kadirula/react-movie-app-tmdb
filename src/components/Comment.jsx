import React from 'react'
import { useSelector } from 'react-redux';
import AvatarImage from '../assets/avatar.jpg'

const Comment = () => {

    const { comments } = useSelector(state => state.movie);

    return (
        <>
            {
                comments.results.map((comment, index) => (
                    <div className='comment' key={index}>
                        <div className="comment__image">
                            <img src={
                                comment.author_details.avatar_path ?
                                    (
                                        comment.author_details.avatar_path?.indexOf('/https') == 0 ?
                                            comment.author_details.avatar_path?.replace('/https', 'https') :
                                            comment.author_details.avatar_path?.replace('/', 'https://www.gravatar.com/avatar/')
                                    )
                                    :
                                    AvatarImage
                            } alt={comment.author_details.name} />
                        </div>
                        <div className="comment__info">
                            <div className="comment__text">
                                <h4 className='comment__author'>{comment.author_details.name ? comment.author_details.name : 'User'}</h4>
                                <p className="comment__desc">{comment.content}</p>
                            </div>
                            <div className="comment__date">{new Date(comment.created_at).toDateString()}</div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default Comment