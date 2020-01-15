import { useState, useEffect } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { isNil, or, not, isEmpty } from 'ramda'
import { AsyncStorage } from 'react-native'

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(user: $user) {
      token
    }
  }
`

const useAuth = user => {
  const [userPayload, setPayload] = useState(null)
  const [token, setToken] = useState('')
  const [login, { data: loginData, error: loginError }] = useMutation(
    LOGIN_USER
  )
  const [createUser, { data: createUserData }] = useMutation(CREATE_USER)

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token')

      if (token) {
        setToken(token)
      }
    }

    fetchToken()
  }, [])

  useEffect(() => {
    if (or(isNil(user), isEmpty(user))) return

    const userPayload = {
      name: user.name,
      email: user.email,
      password: user.id,
      phone: user.email,
      businessName: user.givenName
    }

    setPayload(userPayload)

    login({
      variables: {
        email: userPayload.email,
        password: userPayload.password
      }
    })
  }, [user])

  useEffect(() => {
    if (isNil(loginError)) return

    if (/INVALID_CRENDENTIALS/.test(loginError.message)) {
      createUser({ variables: { user: userPayload } })
    }
  }, [loginError])

  useEffect(() => {
    if (or(not(loginData), isNil(loginData))) return

    setToken(loginData.login.token)
  }, [loginData])

  useEffect(() => {
    if (or(not(createUserData), isNil(createUserData))) return

    setToken(createUserData.createUser.token)
  }, [createUserData])

  return token
}

export { useAuth }
