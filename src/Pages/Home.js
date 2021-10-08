import React, { Fragment, useContext } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Search'
import { Spinner } from '../components/Spinner'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)

    return (
        <Fragment>
            <Search />
            <div className='row'>

                {loading
                    ? (<Spinner />)

                    : users.map(user => (
                        <div className='col-sm-4 mt-4' key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
