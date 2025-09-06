import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
    ]).then(([usersData, postsData]) => {
      setUsers(usersData);
      setPosts(postsData);
    });
  }, []);

  const handleDelete = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
  };

  const handleSave = (id: number) => {
    setPosts(posts.map(p => (p.id === id ? { ...p, title: editTitle } : p)));
    setEditingId(null);
    setEditTitle("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {users.map(user => (
          <div className="col-md-6 col-lg-4" key={user.id}>
            <div className="card shadow border-0 h-100">
              <div className="d-flex align-items-center p-3 pb-0">
                <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} alt="Profil" className="rounded-circle me-3 border" width={64} height={64} style={{ objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).src = 'https://randomuser.me/api/portraits/lego/1.jpg'; }} />
                <div>
                  <h5 className="card-title mb-1">{user.name}</h5>
                  <div className="text-muted small">@{user.username}</div>
                  <div className="text-secondary small">{user.email}</div>
                </div>
              </div>
              <div className="card-body pt-3">
                <h6 className="mb-2 fw-semibold">Gönderiler:</h6>
                <ul className="list-group list-group-flush">
                  {posts.filter(post => post.userId === user.id).slice(0, 5).map(post => (
                    <li className="list-group-item d-flex align-items-center justify-content-between" key={post.id} style={{ border: 'none', paddingLeft: 0 }}>
                      <div style={{ flex: 1 }}>
                        <span className="text-primary">•</span> {editingId === post.id ? (
                          <input
                            type="text"
                            className="form-control d-inline-block ms-2"
                            style={{ maxWidth: 300, display: 'inline-block' }}
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                          />
                        ) : (
                          <span className="ms-2">{post.title}</span>
                        )}
                      </div>
                      <div>
                        {editingId === post.id ? (
                          <>
                            <button className="btn btn-success btn-sm me-2" onClick={() => handleSave(post.id)} title="Kaydet">
                              <i className="bi bi-check-lg"></i>
                            </button>
                            <button className="btn btn-secondary btn-sm" onClick={handleCancel} title="Vazgeç">
                              <i className="bi bi-x-lg"></i>
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(post)} title="Düzenle">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-dark btn-sm" onClick={() => handleDelete(post.id)} title="Sil">
                              <i className="bi bi-trash"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostList;