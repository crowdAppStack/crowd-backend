import { Button, Divider, Grid, Sheet, Typography } from "@mui/joy"

export default function TemporaryHome() {
  const click = () => {
    window.axios.get('https://api.crowdapp.lndo.site/')
  }

  return (
    <Sheet
      sx={{
        maxWidth: 1024,
        m: 'auto',
      }}
    >
      <Button onClick={click}>Testeuh</Button>
      <Sheet
        sx={{
          borderRadius: 'sm',
          border: '1px solid',
          borderColor: 'neutral.200',
          maxWidth: 1024,
          m: 'auto',
          p: 3,
        }}
        variant="soft"
      >
        <Typography
          level='h1'
          color="primary"
        >
          Hello, World!
        </Typography>
        <Typography
          level='title-lg'
        >
          Now with MUI!
        </Typography>
        <Typography>
          This would be the place to start building your app.
        </Typography>
        <Typography
          level="body-sm"
          color="neutral"
        >
          I added Typescript, MUI, and a few other things to get started. This would be perfect for building a CMS or a dashboard.
        </Typography>
      </Sheet>
      <Grid
        sx={{ mt: 1 }}
        container
        spacing={2}
      >
        {
          Array.from({length: 6}).map((_, i) => (
            <Grid
              key={i}
              xs={12}
              sm={6}
              lg={4}
            >
              <Sheet
                sx={{
                  borderRadius: 'sm',
                  border: '1px solid',
                  borderColor: 'neutral.200',
                  p: 2,
                }}
              >
                <Typography
                  level='h3'
                  variant="plain"
                  color="primary"
                >
                  Card #{i + 1} 
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography level='title-md'>
                  Title of Card #{i + 1}
                </Typography>
                <Typography>
                  This is a temporary home for our app.
                </Typography>
                <Typography
                  level="body-sm"
                  color="neutral"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eaque sed esse quae similique architecto facilis recusandae, delectus laboriosam ab saepe corrupti ea? Corporis laboriosam dolore recusandae consequatur quas consequuntur!
                </Typography>
              </Sheet>
            </Grid>
          ))
        }
      </Grid>
    </Sheet>
  )
}