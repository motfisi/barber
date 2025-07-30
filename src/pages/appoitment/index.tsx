import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';

import Page from '@/components/Page';
import { withAuth } from '@/hocs/withAuth';
import { db } from '@/lib/firebase';

interface Slot {
  id: string;
  date: string;
  time: string;
  booked: boolean;
  bookedBy: string;
}

const Appoitment: FC = () => {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    const fetchSlots = async () => {
      const snapshot = await getDocs(collection(db, 'slots'));
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      })) as Slot[];

      setSlots(data.filter((slot) => !slot.booked));
    };

    fetchSlots();
  }, []);

  return (
    <Page>
      <Box maxWidth={600} mx="auto" mt={4}>
        <Grid container spacing={2} mt={2}>
          {slots.length === 0 ? (
            <Typography>Нет доступных слотов.</Typography>
          ) : (
            slots.map((slot) => (
              <Grid key={slot.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{slot.date}</Typography>
                    <Typography variant="body1">{slot.time}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Page>
  );
};

export default withAuth(Appoitment);
