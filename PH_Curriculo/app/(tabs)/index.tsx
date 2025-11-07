import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a237e" />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={120} color="#ffffff" />
          </View>
          <Text style={styles.name}>Pedro Henrique Maciel</Text>
          <Text style={styles.name}>Rodrigues da Silva</Text>
          <Text style={styles.title}>Desenvolvedor Mobile & Full Stack</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="work" size={28} color="#1a237e" />
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          </View>

          {/* Experience Card 1 - Point */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="event" size={24} color="#1a237e" />
              <Text style={styles.cardTitle}>Projeto Point</Text>
            </View>
            <Text style={styles.cardSubtitle}>Projeto Acadêmico - Faculdade</Text>
            <Text style={styles.cardDescription}>
              Escopo de um app de eventos mobile, competindo com plataformas
              estabelecidas como Sympla. Projeto focado em criar uma experiência intuitiva
              para organizadores e participantes de eventos.
            </Text>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Prototipo em Figma</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Eventos</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Mobile</Text>
              </View>
            </View>
          </View>

          {/* Experience Card 2 - Banco do Brasil */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="account-balance" size={24} color="#1a237e" />
              <Text style={styles.cardTitle}>Residência Porto Digital</Text>
            </View>
            <Text style={styles.cardSubtitle}>Banco do Brasil</Text>
            <Text style={styles.cardDescription}>
              Participação em residência tecnológica no Porto Digital, desenvolvendo soluções
              de gamificação para o aplicativo do Banco do Brasil. Implementação de mecânicas
              de engajamento e recompensas para melhorar a experiência do usuário.
            </Text>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Gamificação</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Html, Css, JS</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>UX</Text>
              </View>
            </View>
          </View>

          {/* Experience Card 3 - Laticínios */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="store" size={24} color="#1a237e" />
              <Text style={styles.cardTitle}>Residência Porto Digital</Text>
            </View>
            <Text style={styles.cardSubtitle}>App de Vendas de Laticínios</Text>
            <Text style={styles.cardDescription}>
              Desenvolvimento do escopo completo de um aplicativo de vendas de laticínios para
              o Porto Digital. Planejamento de funcionalidades, arquitetura de sistema e
              experiência do usuário para plataforma de e-commerce especializada.
            </Text>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>E-commerce</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Vendas</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Escopo</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <MaterialIcons name="code" size={20} color="#666" />
          <Text style={styles.footerText}>Desenvolvido com React Native</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a237e",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    paddingBottom: 32,
  },
  header: {
    backgroundColor: "#1a237e",
    paddingTop: 32,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarContainer: {
    marginBottom: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 70,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 30,
  },
  title: {
    fontSize: 16,
    color: "#b3c5ff",
    marginTop: 8,
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a237e",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a237e",
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#3f51b5",
    fontWeight: "600",
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
    marginBottom: 16,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#e8eaf6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: "#3f51b5",
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
});