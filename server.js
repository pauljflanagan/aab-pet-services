import express from 'express';
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000);
}

async function createUser(username, passwordHash, email) {
  const userId = generateId();
  const userData = {
      userId: userId,
      email: email,
      username: username,
      passwordHash: passwordHash,
      createdAt: new Date(),
      updatedAt: new Date()
  }
  // console.log('success');
  try {
      const user = await prisma.user.create({
        data: userData
    });
  } catch (e) {
    console.error('Error ', e.code, e.message);
  }
}

async function createProduce(produceName, produceRegion, averagePrice, macroNutrients, culturalSignificance) {
  const produceId = generateId();
  const produceData = {
      produceId: produceId,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: produceName,
      region: produceRegion,
      averagePrice: averagePrice,
      macroNutrients: macroNutrients,
      culturalSignificance: culturalSignificance,
  }
  try {  
    const produce = await prisma.produce.create(
      {
          data: produceData
      }
    );
  } catch (e) {
    console.error('Error ', e.code, e.message);
  }
}

async function saveProduce(userId, produceId, userObj, produceObj) {
  const savedProduceId = generateId();
  const savedProduceData = {
      savedProduceId: savedProduceId,
      userId: userId,
      userItem: userObj,
      produceId: produceId,
      produceItem: produceObj,
      createdAt: new Date(),
      updatedAt: new Date()
  }
  try {
      const savedProduce = await prisma.savedProduce.create({
        data: savedProduceData
      });
      console.log('savedProduce', savedProduce);
  } catch (e) {
    console.error('Error ', e.code, e.message);
  }
}

async function findUserByUsername(username, passwordHash) {
  let isValid = false;
  const users = await prisma.user.findUnique({
    where: {
      username: username,
      passwordHash: passwordHash,
    }
  });

  console.log('users', users);
  if (users.length > 0) {
    isValid = true;
    // console.log('isValid', isValid);
  }
  return isValid;
}

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/login", (req, res) => {
	 const isValid = findUserByUsername(
      req.body.username, 
      req.body.passwordHash
  );
  if (isValid) {
      res.status(200).json({ message: "User found!" });
  } else {
      res.status(404).json({ message: "User not found!" });
  }

});

app.post('/register', (req, res) => {
    // Your user creation logic here
    const newItem = createUser(req.body.username,
      req.body.passwordHash, 
      req.body.email
  );
  res.status(201).json(newItem);
});

app.post("/add", (req, res) => {
  const newItem = createProduce(req.body.name,
    req.body.type, 
    req.body.averagePrice,
    req.body.region,
    req.body.macroNutrients,
    req.body.culturalSignificance
);
res.status(201).json(newItem);
});

app.post('/save', (req, res) => {
  const newSavedItem = saveProduce(
      req.body.userId,
      req.body.produceId,
      req.body.userItem,
      req.body.produceItem
  );
  res.status(201).json(newSavedItem);
});

app.get('/produce/:id', async (req, res) => {
  try {
      const produceItems = await prisma.produce.findUnique({
        where: {
            produceId: parseInt(`${req.params.id}`, 10)
        }
      });
      res.status(200).json(produceItems);
  } catch (error) {
      console.error('Error fetching produce items:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/user/:id', async (req, res) => {
  try {
      const user = await prisma.user.findUnique({
        where: {
            username: req.params.id
        }
      });
      res.status(200).json(user);
  } catch (error) {
      console.error('Error fetching user items:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getProduce', async (req, res) => {
    try {
        const produceItems = await prisma.produce.findMany();
        res.status(200).json(produceItems);
    } catch (error) {
        console.error('Error fetching produce items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/getSaved', async (req, res) => {
  console.log("Fetching saved items");
  try {
    const savedProduce = await prisma.savedProduce.findMany({
      include: {
        user: true,
        produce: true
      }
    });
    res.status(200).json(savedProduce);
  } catch (error) {
    console.error('Error fetching saved produce items:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

app.listen(8001, () => {
    console.log('Server is running on port 8001');
});