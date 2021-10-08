import React, { useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'
import { Spinner } from '../components/Spinner'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext),
          urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return (<Spinner />)
    }

    const {
        name, company, avatar_url,
        location, bio, blog, login,
        html_url, followers, following,
        public_repos, public_gists
    } = user

    return (
        <Fragment>
            <Link to='/' className='btn btn-link'>Back to Main</Link>
            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img 
                            src={avatar_url} 
                            alt={name}
                            // style={{width: 300}}
                            />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className='col-sm-2'>
                        </div>
                        <div className='col'>
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url} target='_blank' rel="noreferrer" className='btn btn-dark'>Open Profile</a>
                            <ul>
                               {login && <li>
                                   <strong>Username: </strong> {login}
                                </li>}

                                {company && <li>
                                   <strong>Company: </strong> {company}
                                </li>}

                                {blog && <li>
                                   <strong>Website: </strong> {blog}
                                </li>}
                            </ul>

                            <div className='bage bage-primary'>Followers: {followers}</div>
                            <div className='bage bage-success'>Following: {following}</div>
                            <div className='bage bage-info'>Repositories: {public_repos}</div>
                            <div className='bage bage-dark'>Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos} />
        </Fragment>
    )
}
