import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
        source={{ uri: "https://raw.githubusercontent.com/sharmelitasigalingging-cell/pertemuan2/main/images/buatgithub.jpeg" }} 
        
         //  bisa juga menggunakan local image
        //  image: source={require('../assets/images/buatgithub.jpeg')}

        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>SHARMELITA ARINI TERESIA S </Text>
      <Text style={styles.nim}>NIM: 243303621242</Text>
      <Text style={styles.jurusan}>sistem informasi</Text>


      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 “Menghargai diri sendiri adalah pondasi dari semua hubungan yang sehat.”
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a31c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70, // Bikin jadi layang-layang
    borderWidth: 3,
    borderColor: '#080804',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#331ac2',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#202d9e',
    marginBottom: 20,
    letterSpacing: 2,
  },
  jurusan: {
    fontSize: 14,
    color: '#202d9e',
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});                                                                                                                                                                                       