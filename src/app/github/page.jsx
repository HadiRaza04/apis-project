'use client'
import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { EditOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Alert, Space,Empty } from 'antd';
import swal from 'sweetalert'
const GithubSearchFrom = () => {
    const { Meta } = Card;
    const [user, setUser] = useState("");
    const [dataValues, setData] = useState([])
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false)
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        setError("")
        if (user.trim() !== "") {
            try {
                setLoader(true)
                setLoading(true)
                const data = await fetch(`https://api.github.com/users/${user}`)
                if (data.ok) {
                    const response = await data.json()
                    setData(response)
                } else {
                    throw new Error("Sorry, Data not found")
                }
            }
            catch (error) {
                setError(error.message)
            }
            setLoader(false)
            setLoading(false)
        }
        else {
            swal({
                content: <div>
                    <p>Empty,Input</p>
                </div>,
                button: "✗",
            });
        }
        
        setUser("")
    }
    return (
        <div className='main-wrapper pt-7'>
            <ul>
                <li className='inputFeild'> <Form.Control type="text" value={user} placeholder="Search Github Profile " onChange={(e) => setUser(e.target.value)} />
                </li>
                <li className='button'>
                    <Button onClick={fetchData} >Search</Button>
                </li>
            </ul>
            <div className="card_wrapper ">
                {
                    error ?
                        <div className="error-wrapper">
                            <Empty />
                        </div>
                        : loader ?
                            <Card
                                style={{
                                    width: 300,
                                    marginTop: 16,
                                }}
                                actions={[
                                    <UserOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Skeleton>
                            </Card> :
                            <Card 
                                className={!dataValues.id ? "hide" : "show"}
                                style={{
                                    width: 300,
                                    marginTop: 16,
                                }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        
                                        avatar={<Avatar src={dataValues.avatar_url} />}
                                        title={dataValues.name}
                                        description={dataValues.login}
                                        className = {!dataValues.name ? "mt" :""}
                                    />
                                    <div className="bio" >
                                        <p>{dataValues.bio}</p>
                                    </div>
                                    <div className="body_wrapper">
                                        <ul>
                                            <li>
                                                <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-people">
                                                    <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                                                </svg>
                                                <span> {dataValues.followers} followers</span>
                                                <span style={{ marginLeft: 10 }}>{dataValues.following} following</span>

                                            </li>
                                            <li>
                                            </li>
                                            <li className={dataValues.location ? ' show' : 'hide'}>
                                                <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg><span>{dataValues.location} </span>

                                            </li>
                                        </ul>
                                        <div className="followButton">
                                            <a className='btn' href={dataValues.html_url} target="_blank">Follow</a>
                                        </div>
                                    </div>
                                </Skeleton>
                            </Card>
                }
            </div>
        </div >
    )
}

export default GithubSearchFrom