import React from 'react'

const PostCard = ({posts, moveSinglePost}) => {
  return (
    <div className="row mt-3">
          <div className="col-md-6">
            {posts.map((item) => (
              <div className="card shadow border-0 mb-5" onClick={()=>moveSinglePost(item.id)}>
                <div className="card-header bg-primary text-white fw-bold fs-5">{item.title}</div>
                <div className="card-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default PostCard