import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 22, end: 30 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 33, end: 40 },
                  },
                  loc: { start: 33, end: 40 },
                },
                loc: { start: 33, end: 41 },
              },
              loc: { start: 32, end: 42 },
            },
            loc: { start: 32, end: 43 },
          },
          directives: [],
          loc: { start: 22, end: 43 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "product", loc: { start: 46, end: 53 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 54, end: 56 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 58, end: 60 },
                  },
                  loc: { start: 58, end: 60 },
                },
                loc: { start: 58, end: 61 },
              },
              directives: [],
              loc: { start: 54, end: 61 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 64, end: 71 },
            },
            loc: { start: 64, end: 71 },
          },
          directives: [],
          loc: { start: 46, end: 71 },
        },
      ],
      loc: { start: 0, end: 73 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 80, end: 87 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 92, end: 94 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 96, end: 98 } },
              loc: { start: 96, end: 98 },
            },
            loc: { start: 96, end: 99 },
          },
          directives: [],
          loc: { start: 92, end: 99 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 102, end: 106 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 108, end: 114 },
              },
              loc: { start: 108, end: 114 },
            },
            loc: { start: 108, end: 115 },
          },
          directives: [],
          loc: { start: 102, end: 115 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 118, end: 129 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 131, end: 137 },
              },
              loc: { start: 131, end: 137 },
            },
            loc: { start: 131, end: 138 },
          },
          directives: [],
          loc: { start: 118, end: 138 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 141, end: 146 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 148, end: 153 },
              },
              loc: { start: 148, end: 153 },
            },
            loc: { start: 148, end: 154 },
          },
          directives: [],
          loc: { start: 141, end: 154 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "image", loc: { start: 157, end: 162 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 164, end: 170 },
              },
              loc: { start: 164, end: 170 },
            },
            loc: { start: 164, end: 171 },
          },
          directives: [],
          loc: { start: 157, end: 171 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 174, end: 181 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Review",
                    loc: { start: 184, end: 190 },
                  },
                  loc: { start: 184, end: 190 },
                },
                loc: { start: 184, end: 191 },
              },
              loc: { start: 183, end: 192 },
            },
            loc: { start: 183, end: 193 },
          },
          directives: [],
          loc: { start: 174, end: 193 },
        },
      ],
      loc: { start: 75, end: 195 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 201, end: 207 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 212, end: 214 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 216, end: 218 },
              },
              loc: { start: 216, end: 218 },
            },
            loc: { start: 216, end: 219 },
          },
          directives: [],
          loc: { start: 212, end: 219 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 222, end: 227 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 229, end: 235 },
              },
              loc: { start: 229, end: 235 },
            },
            loc: { start: 229, end: 236 },
          },
          directives: [],
          loc: { start: 222, end: 236 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 239, end: 250 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 252, end: 258 },
              },
              loc: { start: 252, end: 258 },
            },
            loc: { start: 252, end: 259 },
          },
          directives: [],
          loc: { start: 239, end: 259 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 262, end: 268 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 270, end: 273 },
              },
              loc: { start: 270, end: 273 },
            },
            loc: { start: 270, end: 274 },
          },
          directives: [],
          loc: { start: 262, end: 274 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 277, end: 286 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DataTime",
                loc: { start: 288, end: 296 },
              },
              loc: { start: 288, end: 296 },
            },
            loc: { start: 288, end: 297 },
          },
          directives: [],
          loc: { start: 277, end: 297 },
        },
      ],
      loc: { start: 196, end: 299 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 305, end: 310 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 300, end: 310 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DataTime", loc: { start: 319, end: 327 } },
      directives: [],
      loc: { start: 312, end: 327 },
    },
  ],
  loc: { start: 0, end: 328 },
} as unknown as DocumentNode;
