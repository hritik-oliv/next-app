import {
    Body,
    Button,
    CodeInline,
    Column,
    Container,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Markdown,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components'
  import React from 'react'
  import {render} from '@react-email/render'
  
  const overviewData = [
    {
      icon: 'https://i.ibb.co/GJ9tbW0/image.png',
      value: '12',
      text: 'Total meetings',
      color: 'rgba(236, 239, 255, 0.60)',
    },
    {
      icon: 'https://i.ibb.co/vqPgPrb/image.png',
      value: '5',
      text: 'Important meetings',
      color: '#FDF2FB',
    },
    {
      icon: 'https://i.ibb.co/SwrmyBZ/image.png',
      value: '3',
      text: 'Next steps due',
      color: '#F4FCEB',
    },
    {
      icon: 'https://i.ibb.co/s28Php8/image.png',
      value: '$400,000',
      text: 'Deal amount',
      color: '#FFFBE6',
    },
  ]
  
  const containerStyle = {
    borderRadius: '10px',
    marginBottom: '20px',
    maxWidth: '640px',
  }
  
  const header = {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '28px',
    textAlign: 'center',
  }
  
  const tagStyle = {
    display: 'inline-block',
    marginRight: '10px',
    borderRadius: '4px',
    padding: '4px 8px',
    backgroundColor: 'rgba(209, 213, 219, 0.30)',
    marginTop: '5px',
  }
  
  const textStyle = {margin: 0, padding: 0}
  const boldStyle = {fontSize: '18px', fontWeight: '600'}
  
  const TopBanner = ({reportName}) => {
    return (
      <Container
        style={{
          ...containerStyle,
          backgroundImage: 'url(https://i.ibb.co/mXG39DN/Rectangle-3464031.png)',
          backgroundSize: 'cover',
          paddingTop: '50px',
          color: 'white',
        }}>
        <Row style={{}}>
          <Column
            style={{padding: '0 40px', width: '50% !important', maxWidth: '50%'}}>
            <Img
              src={'https://i.ibb.co/5jJ03B9/v6972-50977.png'}
              width={60}
              height={60}
            />
            <Heading>{reportName}</Heading>
            <Text>
              Your weekly pipeline report is ready for your review. This will give
              you the overall pipeline and you can understand where every deal
              stands
            </Text>
          </Column>
          <Column style={{maxWidth: '50%', width: '50% !important'}}>
            <Img src='https://i.ibb.co/gZkFG2c/Group-628155820.png' />
          </Column>
        </Row>
      </Container>
    )
  }
  
  const OverviewCell = ({data}) => {
    const {color, icon, value, text} = data
    return (
      <Column
        style={{
          padding: '5px',
          width: '50%',
          verticalAlign: 'top',
          height: '100%',
        }}>
        <Row
          style={{
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: color,
            height: '100%',
          }}>
          <Column style={{width: '50px'}}>
            <Img src={icon} width={35} height={35} />
          </Column>
          <Column>
            <Text style={{...textStyle, ...boldStyle}}>{value}</Text>
            <Text style={textStyle}>{text}</Text>
          </Column>
        </Row>
      </Column>
    )
  }
  
  const OverviewSection = () => {
    const rowStyle = {
      width: '100%',
      paddingLeft: '5%',
      paddingRight: '5%',
    }
    return (
      <Container
        style={{
          ...containerStyle,
          backgroundColor: 'white',
          paddingBottom: '20px',
        }}>
        <Text style={header}>Day overview</Text>
        <Row style={rowStyle}>
          <OverviewCell data={overviewData[0]} />
          <OverviewCell data={overviewData[1]} />
        </Row>
        <Row style={rowStyle}>
          <OverviewCell data={overviewData[2]} />
          <OverviewCell data={overviewData[3]} />
        </Row>
        <Hr style={rowStyle} />
        <Text style={header}>Meetings count by rep</Text>
        <Row style={rowStyle}>
          <Text style={{textAlign: 'center'}}>
            <span style={tagStyle}>Blake: 6</span>
            <span style={tagStyle}>Blake: 6</span>
            <span style={tagStyle}>Blake: 6</span>
            <span style={tagStyle}>Blake: 6</span>
            <span style={tagStyle}>Blake: 6</span>
          </Text>
        </Row>
      </Container>
    )
  }
  
  const MeetingCard = () => {
    const btnStyle = {
      width: '80%',
      padding: '10px',
      borderRadius: '4px',
    }
    return (
      <Section
        style={{
          marginBottom: '20px',
          width: '100%',
          paddingLeft: '10%',
          paddingRight: '10%',
        }}>
        <Section
          style={{
            backgroundColor: 'rgba(243, 242, 252, 0.70)',
            padding: '12px',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
          }}>
          <Row>
            <Column>
              <Text
                style={{
                  fontSize: '16px',
                  color: '#574CFE',
                  fontWeight: '500',
                  ...textStyle,
                }}>
                Final Propasal review &lt;&gt; ACME
              </Text>
            </Column>
            <Column>
              <Text style={{textAlign: 'right', ...textStyle}}>
                <span style={tagStyle}>10:00 AM</span>
                <span style={tagStyle}>Available</span>
              </Text>
            </Column>
          </Row>
          <Text
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B5563',
            }}>
            The CEO and CFO from ACME are joining to review the final proposal,
            making it crucial to secure their commitment. Since you are available
            (10:00 AM - 11:00 AM), join the call to provide additional support and
            address any last-minute concerns to ensure the deal progresses
            smoothly.
          </Text>
          <Text style={{color: '#1F2A37'}}>
            👤 John Smith, Jane Doe, Blake Adams
          </Text>
          <Row>
            <Column>
              <Button
                style={{
                  ...btnStyle,
                  backgroundColor: '#574CFE',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '14px',
                }}>
                Add me to call
              </Button>
            </Column>
            <Column>
              <Button
                style={{
                  ...btnStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.70)',
                  border: '1px solid #D1D5DB',
                  color: '#111928',
                  textAlign: 'center',
                  fontSize: '14px',
                }}>
                Leave a note
              </Button>
            </Column>
          </Row>
          <Text>✅ You're available for this call</Text>
        </Section>
  
        <Section
          style={{
            backgroundColor: 'white',
            border: '1px solid #EDEEF0',
            padding: '10px 10px',
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
          }}>
          <Text style={{margin: '0px'}}>
            <span
              style={{
                color: '#7678FF',
                border: '1px solid #7678FF',
                padding: '3px',
                fontSize: '12px',
                display: 'inline-block',
                lineHeight: '8px',
                borderRadius: '4px',
              }}>
              $
            </span>{' '}
            <span>Dunder Mifflin</span>
          </Text>
          <Text
            style={{
              fontSize: '12px',
              fontWeight: '400',
              color: '#4B5563',
              margin: '0',
            }}>
            Negotiation | $80,000 | Oct 15, 2024 | Blake Adams
          </Text>
          <Text
            style={{
              marginTop: '5px',
              marginBottom: '10px',
              fontSize: '14px',
              color: '#4B5563',
            }}>
            The CEO and CFO have signed off on the final proposal along with
            the...
          </Text>
          <Button
            style={{
              borderRadius: '4px',
              border: '1px solid #D1D5DB',
              textAlign: 'center',
              padding: '10px',
              fontSize: '14px',
              color: '#4B5563',
              width: 'calc(100% - 20px)',
            }}>
            Review deal ➡️
          </Button>
        </Section>
      </Section>
    )
  }
  
  const ImportantMeetingsSection = () => {
    return (
      <Container
        style={{
          ...containerStyle,
          backgroundColor: 'white',
          paddingBottom: '20px',
        }}>
        <Text style={header}>⚠️ Important meetings</Text>
        <MeetingCard />
        <MeetingCard />
      </Container>
    )
  }
  
  export default function Email(props) {
    const {reportName} = props
    return (
      <Html>
        <Head />
        <Preview>{reportName}</Preview>
        <Body style={{backgroundColor: '#e4e4e4', fontFamily: 'sans-serif'}}>
          <TopBanner reportName={reportName} />
          <OverviewSection />
          <ImportantMeetingsSection />
        </Body>
      </Html>
    )
  }
  