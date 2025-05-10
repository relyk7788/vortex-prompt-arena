export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      battles: {
        Row: {
          category: Database["public"]["Enums"]["battle_category"]
          created_at: string | null
          created_by: string | null
          description: string
          difficulty: Database["public"]["Enums"]["battle_difficulty"]
          ends_at: string
          entry_fee: number | null
          id: string
          is_premium: boolean | null
          scenario: string
          status: Database["public"]["Enums"]["battle_status"] | null
          title: string
        }
        Insert: {
          category: Database["public"]["Enums"]["battle_category"]
          created_at?: string | null
          created_by?: string | null
          description: string
          difficulty: Database["public"]["Enums"]["battle_difficulty"]
          ends_at: string
          entry_fee?: number | null
          id?: string
          is_premium?: boolean | null
          scenario: string
          status?: Database["public"]["Enums"]["battle_status"] | null
          title: string
        }
        Update: {
          category?: Database["public"]["Enums"]["battle_category"]
          created_at?: string | null
          created_by?: string | null
          description?: string
          difficulty?: Database["public"]["Enums"]["battle_difficulty"]
          ends_at?: string
          entry_fee?: number | null
          id?: string
          is_premium?: boolean | null
          scenario?: string
          status?: Database["public"]["Enums"]["battle_status"] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "battles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          profile_id: string
          submission_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          profile_id: string
          submission_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          submission_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          id: string
          points: number | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          id: string
          points?: number | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          id?: string
          points?: number | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          battle_id: string
          created_at: string | null
          feedback: string | null
          id: string
          profile_id: string
          prompt: string
          score_clarity: number | null
          score_effectiveness: number | null
          score_originality: number | null
          score_total: number | null
          votes: number | null
        }
        Insert: {
          battle_id: string
          created_at?: string | null
          feedback?: string | null
          id?: string
          profile_id: string
          prompt: string
          score_clarity?: number | null
          score_effectiveness?: number | null
          score_originality?: number | null
          score_total?: number | null
          votes?: number | null
        }
        Update: {
          battle_id?: string
          created_at?: string | null
          feedback?: string | null
          id?: string
          profile_id?: string
          prompt?: string
          score_clarity?: number | null
          score_effectiveness?: number | null
          score_originality?: number | null
          score_total?: number | null
          votes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_battle_id_fkey"
            columns: ["battle_id"]
            isOneToOne: false
            referencedRelation: "battles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      battle_category:
        | "creative"
        | "technical"
        | "business"
        | "educational"
        | "fun"
      battle_difficulty: "beginner" | "intermediate" | "advanced" | "expert"
      battle_status: "upcoming" | "active" | "judging" | "completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      battle_category: [
        "creative",
        "technical",
        "business",
        "educational",
        "fun",
      ],
      battle_difficulty: ["beginner", "intermediate", "advanced", "expert"],
      battle_status: ["upcoming", "active", "judging", "completed"],
    },
  },
} as const
