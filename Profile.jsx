import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Settings, Mail, Bell, ShieldCheck, ChevronRight, LogOut } from 'lucide-react-native';

const Profile = () => {
  // Profile Option Component (Reusable)
  const MenuOption = ({ icon: Icon, title, subtitle, color = "#666" }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
        <Icon size={22} color={color} />
      </View>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      <ChevronRight size={20} color="#CCC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Section with Gradient */}
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.profileImage}
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150' }}
              />
              <TouchableOpacity style={styles.editBadge}>
                <Settings size={14} color="#FFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.userName}>Ifrah Coder</Text>
            <Text style={styles.userTag}>@ifrah_dev • Pro Member</Text>
          </View>
        </LinearGradient>

        {/* Stats Section */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Tasks</Text>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>98%</Text>
            <Text style={styles.statLabel}>Success</Text>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionHeading}>Account Settings</Text>
          <MenuOption icon={User} title="Personal Information" subtitle="Name, Email, Phone" color="#4A90E2" />
          <MenuOption icon={Mail} title="Email Notifications" subtitle="On" color="#F5A623" />
          <MenuOption icon={Bell} title="Push Notifications" subtitle="Enabled" color="#7ED321" />
          <MenuOption icon={ShieldCheck} title="Security" subtitle="Password & 2FA" color="#9013FE" />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <LogOut size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>App Version 1.0.4</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: { alignItems: 'center' },
  imageWrapper: { position: 'relative' },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#007AFF',
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  userName: { fontSize: 22, fontWeight: '800', color: '#FFF', marginTop: 12 },
  userTag: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: -30,
    paddingVertical: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#EEE' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  statLabel: { fontSize: 12, color: '#888', marginTop: 4 },

  menuSection: { marginTop: 25, paddingHorizontal: 20 },
  sectionHeading: { fontSize: 16, fontWeight: '700', color: '#333', marginBottom: 15, marginLeft: 5 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  iconContainer: { padding: 8, borderRadius: 10 },
  menuTextContainer: { flex: 1, marginLeft: 15 },
  menuTitle: { fontSize: 15, fontWeight: '600', color: '#333' },
  menuSubtitle: { fontSize: 12, color: '#999', marginTop: 2 },

  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logoutText: { color: '#FF3B30', fontWeight: '700', marginLeft: 8, fontSize: 16 },
  versionText: { textAlign: 'center', color: '#BBB', fontSize: 12, marginBottom: 30 },
});

export default Profile;