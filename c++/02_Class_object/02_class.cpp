/*
	class Name{
		private:
			data memmber 
		public:
			user function
	};
	
	Name s;
	s.
	
*/

#include<iostream>
using namespace std;

class Student{
//	private:
		int rollno;
		string name;
	public:
		void putData(){
			cout<<"\nenter your Roll no :";
			cin>>rollno;
			cout<<"enter your Name :";
			cin>>name;
		}
		void getData(){
			cout<<"Roll no : "<<rollno;
			cout<<"\nName : "<<name;
		}
};

int main()
{
	Student user;
	Student s1;
	
	user.putData();
	user.getData();
	
	s1.putData();
	s1.getData();
	
	return 0;
}
