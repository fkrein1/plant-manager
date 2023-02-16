import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import * as Confirmation from '../components/ConfirmationScreen';

export function ConfirmPlant() {
  const navigation = useNavigation();

  return (
    <Confirmation.Root>
      <Confirmation.Emoji emoji="🤗" />
      <Confirmation.Title title="All very well" />
      <Confirmation.Subtitle subtitle="Rest assured that we will always remind you to take care of your little plant with lots of love." />
      <Confirmation.Footer>
        <Button
          title="Thank you :D"
          onPress={() => navigation.navigate('MyPlants')}
        />
      </Confirmation.Footer>
    </Confirmation.Root>
  );
}
