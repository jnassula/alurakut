import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSideBar(props) {
  console.log(props)
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: "8px" }} />
    </Box>
  )
}

export default function Home() {

  const profileUser = 'jnassula'
  const favoriteDevs = [
    'venturalp',
    'portothree',
    'cadupaiva3',
    'rafegal',
    'marcio',
    'omariosouto',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={profileUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)

              <OrkutNostalgicIconSet />
            </h1>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >
              Pessoas da Comunidade Dev ({favoriteDevs.length})
            </h2>
            <ul>
              {favoriteDevs.map((elem) => {
                return (
                  <li>
                    <a href={`/users/${elem}`} key={elem}>
                      <img src={`https://github.com/${elem}.png`} />
                      <span>{elem}</span>
                    </a>
                  </li>

                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="smallTitle">
              Comunidade
            </h2>
          </Box>  
        </div>
      </MainGrid>
    </>
  )
}
