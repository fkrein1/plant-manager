import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import * as Confirmation from '../components/ConfirmationScreen';

export function ConfirmLogin() {
  const navigation = useNavigation();

  return (
    <Confirmation.Root>
      <Confirmation.Emoji emoji="😄" />
      <Confirmation.Title title="We are ready!" />
      <Confirmation.Subtitle subtitle="Now let's start taking care of your little plants very carefully." />
      <Confirmation.Footer>
        <Button
          title="Start"
          onPress={() => navigation.navigate('PlantSelect')}
        />
      </Confirmation.Footer>
    </Confirmation.Root>
  );
}
