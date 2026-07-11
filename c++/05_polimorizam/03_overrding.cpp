#include<iostream>
using namespace std;

class Perent{
	public:
		void display(){
			cout<<"\nThis Perent Function";
	}
};
class Child : public Perent{
	public:
		void display(){
			cout<<"\nChild Function";
	}
};

int main()
{
	Child obj;
	obj.display();
	obj.display();
	
//	solve
	obj.Perent::display();
	
//	Child user;
//	user.display();

	return 0;
}
